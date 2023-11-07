import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import WishListSkull from "./WishListSkull";

const WishList = () => {
    const {user} = useContext(AuthContext)
    const {_id} = useParams()


    const { isLoading, data: wishlistBlog } = 
    useQuery({
        queryKey: ['wishlist',user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist/${user.email}`)
            return res.json()
            
        }
    
    })

    // const {data: blog } = useQuery({
    //     queryKey: ['blogs'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/blogs')
    //         return res.json()
            
    //     }
    // })


    // useEffect(()=>{
    //     fetch(`http://localhost:5000/wishlist/${user.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("this is data",data)
    //         setWishlistBlog(data)
    //     })
        
    // },[user.email])


    return (
        <div className="grid grid-cols-2 gap-8 py-6">
            {
                isLoading ? <WishListSkull card={20}></WishListSkull> : 
                wishlistBlog.map(item => 
                    <div key={item._id} className="card bg-base-100 shadow-xl  lg:flex">
                    <div>
                        <figure><img className="md:h-[300px] rounded-t-xl md:w-full" src={item.image} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                        </h2>
                        <p>{item.short_description}</p>
                        <p className="font-semibold">{item.category}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/details/${_id}`}>
                            <button className="badge badge-outline">View details</button>
                            </Link>
                            <button className="badge badge-outline mt-0.5">Remove</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default WishList;