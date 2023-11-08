/* eslint-disable react/prop-types */
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const BlogDetailPage = ({ selectedBlog }) => {
    const {user} = useContext(AuthContext)
    const {_id, title, image, short_description, long_description,userEmail } = selectedBlog || {}
    
    const BlogOwner = user.email == userEmail;


    return (
        <PhotoProvider>
            <div>
                <div className="hero md:min-h-16 bg-base-100">

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="foo">
                            <PhotoView key={_id} src={image}>
                                <img className="md:max-w-xl max-w-sm rounded-lg shadow-2xl" src={image || <Skeleton></Skeleton>} alt=""/>
                            </PhotoView>
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold">{title}</h1>
                            <p className="py-6">{short_description}</p>
                            {/* {
                                BlogOwner ? <button className='btn bg-stone-400 text-white'>Update Blog</button> : ''
                            } */}
                            <Link to={`/updateBlog/${_id}`}>
                            <button className='btn bg-stone-400 text-white'>Update Blog</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mg:px-20 md:py-16 p-5">
                    <p>{long_description}</p>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default BlogDetailPage;