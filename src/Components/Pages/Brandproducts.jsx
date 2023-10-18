import { useLoaderData, useParams } from "react-router-dom";
import Productsdetails from "./Productsdetails";

const Brandproducts = () => {
    const loadedproducts = useLoaderData()
    const {id} = useParams()
    console.log(loadedproducts, id)
    const products = loadedproducts.filter(product => product.brand === id)

    return (
        <div>
            <div className=" grid md:grid-cols-2 grid-cols-1 mt-10 gap-4 w-4/5 mx-auto">
                {
                    products.map(product => <Productsdetails key={product._id} product={product}></Productsdetails>)
                }
            </div>
        </div>
    );
};

export default Brandproducts;