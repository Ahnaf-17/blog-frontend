import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogDetailPage from "./BlogDetailPage";

const BlogDetail = () => {
    const [selectedBlog,setSelectedBlog] = useState();
    const {_id} = useParams()

    const {isPending,data: AllBlog} = useQuery({
        queryKey: ['blogs'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/blogs')
            return res.json()
        }
    })

    useEffect(()=>{
        const findDetails = AllBlog?.find(selectedBlog=>selectedBlog._id == _id);
        setSelectedBlog(findDetails)
    },[AllBlog, _id])

    if(isPending){
        return <span className="loading loading-spinner loading-lg"></span>

    }





    return (
        <div>
            <BlogDetailPage selectedBlog={selectedBlog}></BlogDetailPage>
        </div>
    );
};

export default BlogDetail;