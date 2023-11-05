
const BlogCard = ({ blog }) => {
    const { title, image, short_description } = blog;
    return (
        // <div className="card  lg:card-side bg-base-100 shadow-xl">
        //     <figure ><img className="" src={image} alt="Album" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{title}</h2>
        //         <p>{short_description}</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Listen</button>
        //         </div>
        //     </div>
        // </div>
        <div className="card bg-base-100 shadow-xl  lg:flex">
            <div>
                <figure><img className="md:h-[300px] rounded-t-xl md:w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
// lg:h-64