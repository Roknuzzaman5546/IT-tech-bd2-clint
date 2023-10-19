import { useLoaderData } from "react-router-dom";
import Mycarddetails from "./Mycarddetails";

const Mycard = () => {
    const mycards = useLoaderData()
    console.log(mycards)
    return (
        <div className=" w-11/12 mx-auto">
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-20">
                {
                    mycards.map(mycard => <Mycarddetails key={mycard._id} mycard={mycard}></Mycarddetails>)
                }
            </div>
        </div>
    );
};

export default Mycard;