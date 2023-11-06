/* eslint-disable react/prop-types */
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogDetailPage = ({ selectedBlog }) => {
    const {_id, title, image, short_description, long_description } = selectedBlog || {}
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

                        {/* <img src={image} className="md:max-w-xl max-w-sm rounded-lg shadow-2xl" /> */}
                        {/* <ReactPhotoView src={image}></ReactPhotoView> */}
                        <div>
                            <h1 className="text-4xl font-bold">{title}</h1>
                            <p className="py-6">{short_description}</p>

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