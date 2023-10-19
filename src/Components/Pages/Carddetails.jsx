import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Carddetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    console.log(id)
    const findcards = cards.find(card => card._id === id)

    const handlAddcard = () => {
        fetch(`http://localhost:5000/card`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(findcards)
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
            })
    }

    return (
        <div className=" w-4/5 mx-auto my-10">
            <div className=" flex md:flex-row flex-col justify-between items-center">
                <div className="">
                    <img className=" w-11/12" src={findcards.photo} alt="" />
                    <p className=" font-bold italic mt-2">{findcards.description}</p>
                </div>
                <div className=" border-2 border-lime-300 p-5 rounded-md">
                    <h2 className=" text-2xl font-bold text-sky-500 ">{findcards.brand}</h2>
                    <h2 className=" text-2xl font-bold text-orange-500 ">{findcards.name}</h2>
                    <p className=" font-bold">Price: {findcards.price}</p>
                    <p className=" font-bold">Price: {findcards.rating}</p>
                    <button className=" btn btn-outline btn-secondary mt-4" onClick={handlAddcard}>Add to card</button>
                </div>
            </div>
        </div>
    ); 
};

export default Carddetails;