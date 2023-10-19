import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Branddetails = ({ brand }) => {
    const { name, img } = brand;
    return (
        <div className=" border-2 w-11/12 mx-auto border-lime-700 bg-gray-400 rounded-lg">
            <Link to={`/brandproducts/${name}`}>
                <div className=" w-4/5 mx-auto text-center mt-5">
                    <img className=" h-64 w-72 rounded-lg" src={img} alt="" />
                    <h2 className=" text-2xl font-bold mt-2 italic text-gray-700 my-2">Brand: {name}</h2>
                </div>
            </Link>
        </div>
    );
};

Branddetails.propTypes ={
    brand: PropTypes.object
}

export default Branddetails;