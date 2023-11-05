import { useLoaderData } from "react-router-dom";

const AllBlog = () => {
    const blog = useLoaderData()
    return (
        <div>
            {
                blog.length
            }
        </div>
    );
};

export default AllBlog;