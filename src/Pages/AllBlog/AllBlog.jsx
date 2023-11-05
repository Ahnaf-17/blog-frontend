import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const AllBlog = () => {
    const blog = useLoaderData()
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-14 my-16 ">
            {
                blog.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default AllBlog;