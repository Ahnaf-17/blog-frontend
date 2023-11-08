import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
    const [featuredPost,setFeaturedPost] = useState([])
    const {isLoading, data: blog } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs')
            return res.json()
            
        }
        
    })
    useEffect(()=>{
        if(blog){
            const count = blog.map(item => ({...item,count: item.long_description.split(' ').length}))
        const topBlog = count.sort((a,b)=> b.count - a.count).slice(0,10);
        const PostSerial = topBlog.map((value,index) =>({...value, serial: index+1} ))
        // console.log(PostSerial);
        // setFeaturedPost(topBlog)
        setFeaturedPost(PostSerial)
        }
    },[blog])
    const columns = [
        {
          name: 'Serial Number',
          selector: (row) => row.serial,
          sortable: true,
        },
        {
          name: 'Blog Title',
          selector: row => row.title,
          sortable: true,
        },
        {
          name: 'Blog Owner',
          selector: row=> row.owner,
          sortable: true,
        },
        {
          name: 'Profile Picture',
          cell: (row) => <img src={row.image} alt="Profile" />,
        },
      ];

    
    return (
        <div>
            <h1>Featured Blogs - Top 10 Posts</h1>
      <DataTable
        columns={columns}
        data={featuredPost}
        progressPending={isLoading}
      />
        </div>
    );
};

export default FeaturedBlogs;