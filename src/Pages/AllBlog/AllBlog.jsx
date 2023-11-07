import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";
import AllBlogSkull from "./AllBlogSkull";

const AllBlog = () => {
    // const blog = useLoaderData()
    // const { loading } = useContext(AuthContext)
    // const [loading,setLoading] = useState(true)
    const {isLoading, data: blog } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs')
            return res.json()
            
        }
    })
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-14 my-16 ">
                {/* {
                    loading && ''
                } */}
                
                {
                    isLoading ? <AllBlogSkull card={20}></AllBlogSkull>:
                    blog.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlog;