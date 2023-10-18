import { Link } from "react-router-dom";

const Branddetails = ({ brand }) => {
    const { name, img } = brand;
    return (
        <div>
            <Link to={`/brandproducts/${name}`}>
                <div className=" w-4/5 text-center mt-5 mx-auto">
                    <img className=" h-64 w-72 rounded-lg" src={img} alt="" />
                    <h2 className=" text-2xl font-bold mt-2 italic text-orange-500">Brand: {name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Branddetails;