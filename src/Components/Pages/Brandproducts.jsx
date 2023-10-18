import { useLoaderData, useParams } from "react-router-dom";
import Productsdetails from "./Productsdetails";

const Brandproducts = () => {
    const loadedproducts = useLoaderData()
    const {id} = useParams()
    console.log(loadedproducts, id)
    const products = loadedproducts.filter(product => product.brand === id)
    console.log(products)

    return (
        <div>
            <div>
                {
                    products.map(product => <Productsdetails key={product._id} product={product}></Productsdetails>)
                }
            </div>
        </div>
    );
};

export default Brandproducts;