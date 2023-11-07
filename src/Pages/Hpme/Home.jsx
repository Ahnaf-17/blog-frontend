import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/Banner/Banner";
import RecentBlog from "./RecentBlog";

const Home = () => {
    const {isLoading, data: recentBlog } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs')
            return res.json()
            
        }
    })
    console.log(recentBlog)

    return (
        <div>
            <Banner></Banner>
            <section className="mb-10">
                <div>
                    {
                        isLoading ? <p>loading...</p> :
                        recentBlog.slice(0,6).map(blog =>(
                            <RecentBlog key={blog._id} blog={blog}></RecentBlog>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;