import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const UpdateBlog = () => {
    const {user} = useContext(AuthContext)

    const { isLoading, data: AllBlog } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://blog-server-1qfpy22zn-ahnaf-ahmeds-projects.vercel.app/blogs')
            return res.json()
        }
    })
    if(isLoading){
        return <p>Loading...</p>
    }

    const {_id, title, image, short_description, long_description,category,datetime } = AllBlog || {}
    const handleUpdateBlog = e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const datetime = form.datetime.value;
        const name = user.displayName
        const profile = user.photoURL
        const userEmail = user.email

        const newBlog = {title,category,image,short_description,long_description,datetime,name,profile,userEmail
        };
        console.log(newBlog)

        fetch(`https://blog-server-1qfpy22zn-ahnaf-ahmeds-projects.vercel.app/blogUpdate/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(newBlog)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'new blog added added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    
    return (
        <div>
        <div className="bg-base-100 p-24">
        <h2 className="text-2xl text-black text-center font-bold">Add a Update blog</h2>
        <form onSubmit={handleUpdateBlog
}>
            {/* row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-white">Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={title} placeholder="Blog title"
                            name="title" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                    <label className="label">
                        <span className="label-text text-white">Category</span>
                    </label>
                    <select defaultValue={category} className="h-[46px]" name="category" id="category">
                        <option value="one-day-tour">One-day Tour</option>
                        <option value="backpack-tour">Backpack Tour</option>
                        <option value="camping-tour">Camping</option>
                    </select>
                </div>
            </div>
            {/* row */}
            <div className="md:flex">


                <div className="form-control md:w-1/2 ">
                <label className="label">
                        <span className="label-text text-white"> Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={image} name="image" placeholder="photo url" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                    <label className="label">
                        <span className="label-text  text-white">Short  Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={short_description} name="short_description" placeholder="Short details" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                    <label className="label">
                        <span className="label-text text-white">Date</span>
                    </label>
                    <label className="input-group">
                        <input type="datetime-local" defaultValue={datetime} name="datetime" id="" />
                    </label>
                </div>

            </div>
            {/* row */}
            <div className="">

                <div className="form-control md:w-full mt-5">
                    <textarea className="rounded-md" name="long_description" defaultValue={long_description} id="" cols="30" rows="10" placeholder="write details here"></textarea>
                </div>
            </div>

            <input type="submit" value="Update Blog" className="btn btn-block bg-gray-700 text-white mt-5 " />

        </form>
    </div>
    </div>
    );
};

export default UpdateBlog;