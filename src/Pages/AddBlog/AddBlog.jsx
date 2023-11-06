
const AddBlog = () => {
    const handleAddBlog = e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const shortDetails = form.shortDetails.value;
        const details = form.details.value;

        const newBlog = {title,category,photo,shortDetails,details};
        console.log(newBlog)
    }



    return (
        <div>
        <div className="bg-base-100 p-24">
        <h2 className="text-2xl text-black text-center font-bold">Add a new blog</h2>
        <form onSubmit={handleAddBlog}>
            {/* row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-white">Product name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Blog title"
                            name="title" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                    <label className="label">
                        <span className="label-text text-white">Category</span>
                    </label>
                    <select className="h-[46px]" name="category" id="category">
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
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                    <label className="label">
                        <span className="label-text text-white">Short  Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="shortDetails" placeholder="Short details" className="input input-bordered w-full" />
                    </label>
                </div>

            </div>
            {/* row */}
            <div className="">

                <div className="form-control md:w-full mt-5">
                    <textarea className="rounded-md" name="details" id="" cols="30" rows="10" placeholder="write details here"></textarea>
                </div>
            </div>

            <input type="submit" value="Add Blog" className="btn btn-block bg-gray-700 text-white mt-5 " />

        </form>
    </div>
    </div>
    );
};

export default AddBlog;