import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";

const AllBlog = () => {
    // const blog = useLoaderData()
    const {isPending,data: blog} = useQuery({
        queryKey: ['blogs'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/blogs')
            return res.json()
        }
    })
    if(isPending){
        return <span className="loading loading-spinner loading-lg"></span>

    }
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