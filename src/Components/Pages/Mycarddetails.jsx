import { Link } from "react-router-dom";

const Mycarddetails = ({ mycard }) => {
    const { _id, name, photo, rating, brand, price } = mycard;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-40" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="card-title font-bold text-purple-700">{name}</p>
                    <h2 className="card-title font-bold text-purple-700">{brand}</h2>
                    <p className=" text-orange-500">Price: {price}</p>
                    <div className=" flex">
                        <p>{rating}</p>
                    </div>
                    <div className="card-actions justify-center mt-3">
                        <button className="btn btn-primary">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mycarddetails;