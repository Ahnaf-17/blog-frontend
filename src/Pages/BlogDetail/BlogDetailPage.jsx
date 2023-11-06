/* eslint-disable react/prop-types */

const BlogDetailPage = ({ selectedBlog }) => {
    const { title, image, short_description, long_description } = selectedBlog || {}
    return (
        <div>
            <div className="hero md:min-h-16 bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="md:max-w-xl max-w-sm rounded-lg shadow-2xl" />
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
    );
};

export default BlogDetailPage;