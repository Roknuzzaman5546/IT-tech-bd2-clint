import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updatecrads = () => {
    const products = useLoaderData()
    
    const handlUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        console.log(name, photo, brand, category, price, description, rating)
        const productsUpdate = { name, photo, brand, category, price, description, rating }
        fetch(`https://assingment10-project-server-h5qum2jl3-rokonuzzamans-projects.vercel.app/product/${products._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Updated!',
                    text: 'Product Update succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset()
            })
    }


    return (
        <div>
            <div className=" w-2/3 mx-auto bg-orange-300 rounded-md mt-10 p-10">
                <form onSubmit={handlUpdate}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="photo" defaultValue={ products.photo} placeholder=" Photo" className="file-input file-input-bordered w-full" />
                    </div>
                    <div className=" flex gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={ products.name} placeholder=" Your name" className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <select name="brand" id="" defaultValue={  products.brand} className="file-input file-input-bordered w-full">
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Asus">Asus</option>
                                <option value="Sony">Sony</option>
                                <option value="Intel">Intel</option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category </span>
                            </label>
                            <input type="text" name="category" defaultValue={  products.category} placeholder=" Category " className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={  products.price} placeholder=" Price" className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                    <div className=" flex gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short description
                                </span>
                            </label>
                            <input type="text" name="description" defaultValue={  products.description} placeholder=" Short description" className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating
                                </span>
                            </label>
                            <input type="text" name="rating" defaultValue={  products.rating} placeholder=" Rating" className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value="Submit" className=" btn file-input-bordered w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updatecrads;