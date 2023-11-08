import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/Banner/Banner";
import RecentBlog from "./RecentBlog";
import NewsLetter from "./NewsLetter";

const Home = () => {
    const {isLoading, data: recentBlog } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs')
            return res.json()
            
        }
    })
    console.log(recentBlog)
    // if(recentBlog){
    //     const latestData = recentBlog.slice(-6);
    // }

    return (
        <div>
            <Banner></Banner>
            <section className="mb-10 mt-20">
            <h3 className="text-stone-500 my-20 font-bold text-4xl text-center">Recent Blogs</h3>
                <div  className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    
                    {
                        isLoading ? <p>loading...</p> :
                        recentBlog.slice(-6).map(blog =>(
                            <RecentBlog key={blog._id} blog={blog}></RecentBlog>
                        ))
                    }
                </div>
            </section>
            {/* news letter  */}
            <section className="my-20">
                <NewsLetter></NewsLetter>
            </section>
        </div>
    );
};

export default Home;



