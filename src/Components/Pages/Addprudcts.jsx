import { useContext } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Authprovider/Authprovider";

const Addprudcts = () => {
    const { user } = useContext(Authcontext)
    const useremail = user.email;

    const handleadd = event => {
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
        const productdata = { name, photo, brand, category, price, description, rating,
        useremail }
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset()
            })
    }

    return (
        <div>
            <div className=" w-2/3 mx-auto bg-orange-300 rounded-md mt-10 p-10">
                <form onSubmit={handleadd}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="photo" placeholder=" Photo" className="file-input file-input-bordered w-full" />
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder=" Your name" className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <select name="brand" id="" className="file-input file-input-bordered w-full">
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Asus">Asus</option>
                                <option value="Sony">Sony</option>
                                <option value="Intel">Intel</option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category </span>
                            </label>
                            <input type="text" name="category" placeholder=" Category " className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder=" Price" className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short description
                                </span>
                            </label>
                            <input type="text" name="description" placeholder=" Short description" className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating
                                </span>
                            </label>
                            <input type="text" name="rating" placeholder=" Rating" className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value="Add" className=" btn file-input-bordered w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addprudcts;