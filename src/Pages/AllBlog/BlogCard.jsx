/* eslint-disable react/prop-types */

const BlogCard = ({ blog }) => {
    const { title, image, short_description,category } = blog;
    return (

        <div className="card bg-base-100 shadow-xl  lg:flex">
            <div>
                <figure><img className="md:h-[300px] rounded-t-xl md:w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{short_description}</p>
                <p className="font-semibold">{category}</p>
                <div className="card-actions justify-end">
                    <button className="badge badge-outline">View details</button>
                    <button className="badge badge-outline">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
// lg:h-64