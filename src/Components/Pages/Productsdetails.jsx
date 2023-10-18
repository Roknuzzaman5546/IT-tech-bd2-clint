import { Link } from "react-router-dom";

const Productsdetails = ({ product }) => {
    const { name, photo, brand, _id, rating, price } = product;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-60" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="card-title font-bold text-purple-700">{name}</p>
                    <h2 className="card-title font-bold text-purple-700">{brand}</h2>
                    <p className=" text-orange-500">Price: {price}</p>
                    <div className=" flex">
                        <p>{rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className=" flex items-center justify-between mt-2">
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"><Link to={`/carddetails/${_id}`}>Details</Link></button>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to={`/updatproducts/${_id}`}>Update</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productsdetails;