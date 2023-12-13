import { useLoaderData, useParams } from "react-router-dom";
import Productsdetails from "./Productsdetails";
import Slideshow from "./Slider";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";

const Brandproducts = () => {
    const loadedproducts = useLoaderData()
    console.log(loadedproducts)
    const { id } = useParams()
    const products = loadedproducts.filter(product => product.brand === id)
    console.log(products)

    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (

        <div>
            <div className=" w-11/12 mx-auto mt-10">
                <Slideshow></Slideshow>
            </div>
            <div data-aos="fade-up" className=" grid md:grid-cols-2 grid-cols-1 mt-20 gap-4 w-4/5 mx-auto">
                {
                    products.map(product => <Productsdetails key={product._id} product={product}></Productsdetails>)
                }
            </div>
        </div>
    );
};

export default Brandproducts;