/* eslint-disable react/prop-types */
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useContext  } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useQuery } from '@tanstack/react-query';
// import Comment from './Comment';

const BlogDetailPage = ({ selectedBlog }) => {
    const { user } = useContext(AuthContext)
    // const [comments,setComments] = useState([])
    const { _id, title, image, short_description, long_description, userEmail } = selectedBlog || {}

    const BlogOwner = user.email == userEmail;

    const handleComment = e => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value
        const userEmail = user.email
        const userName = user.displayName
        const profile = user.photoURL

        const newComment = { comment, userEmail, userName, profile, _id }
        console.log(newComment);

        fetch('https://blog-server-eight-beta.vercel.app/comment', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'new blog added added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    // const { isLoading, data: comment } = useQuery({
    //     queryKey: ['comments'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://blog-server-eight-beta.vercel.app/comment${_id}`)
    //         return res.json()
    //         // https://blog-server-eight-beta.vercel.app

    //     }
    // })
    // useEffect(()=>{
    //     setComments(comment)
    // },[])

    


    return (
        <PhotoProvider>
            <div>
                <div className="hero md:min-h-16 bg-base-100">

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="foo">
                            <PhotoView key={_id} src={image}>
                                <img className="md:max-w-xl max-w-sm rounded-lg shadow-2xl" src={image || <Skeleton></Skeleton>} alt="" />
                            </PhotoView>
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold">{title}</h1>
                            <p className="py-6">{short_description}</p>
                            {/* {
                                BlogOwner ? <button className='btn bg-stone-400 text-white'>Update Blog</button> : ''
                            } */}
                            {
                                BlogOwner ? <Link to={`/updateBlog/${_id}`}>
                                    <button className='btn bg-stone-400 text-white'>Update Blog</button>
                                </Link> : ''
                            }

                        </div>
                    </div>
                </div>
                <div className="mg:px-20 md:py-16 p-5">
                    <p>{long_description}</p>
                </div>
                {
                    !BlogOwner ?
                        <form onSubmit={handleComment} className='my-10 flex-col ml-4'>
                            <div>
                                <h3 className='text-xl font-semibold text-black mb-2'>Comment : </h3>
                                <textarea name='comment' placeholder="Write Your Comment" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Post" className="btn  bg-gray-700 text-white h-10 " />
                            </div>

                        </form> : ''
                }
                {/* {
                    isLoading ? <p>loading..</p> : 
                    comments.map(cmt => <Comment key={cmt._id} cmt={cmt}></Comment>)

                } */}


            </div>
        </PhotoProvider>
    );
};

export default BlogDetailPage;