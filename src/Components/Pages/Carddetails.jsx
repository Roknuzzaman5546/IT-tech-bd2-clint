import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Carddetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const findcards = cards.find(card => card._id === id)

    const name = findcards.name;
    const photo = findcards.photo;
    const brand = findcards.brand;
    const category = findcards.category;
    const price = findcards.price;
    const description = findcards.description;
    const rating = findcards.rating;
    const useremail = findcards.useremail;

    const carddata = {
        name, photo, brand, category, price, description, rating,
        useremail
    }

    const handlAddcard = () => {
        fetch(`http://localhost:5000/card`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carddata)
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
        <div className=" w-4/5 mx-auto mt-20 mb-5">
            <div className=" flex md:flex-row flex-col justify-between items-center">
                <div className=" w-full">
                    <img className=" w-1/2" src={findcards.photo} alt="" />
                    <p className=" font-bold italic mt-2 w-4/6"><span className=" text-gray-800 text-xl font-bold">Details: </span>{findcards.description}</p>
                </div>
                <div className=" border-2 w-full  border-gray-500 p-5 rounded-md">
                    <h2 className=" text-2xl font-bold text-sky-500 ">Brand: {findcards.brand}</h2>
                    <h2 className=" text-2xl font-bold text-orange-500 ">Name: {findcards.name}</h2>
                    <p className=" font-bold">Price: {findcards.price}</p>
                    <p className=" font-bold">Rating: {findcards.rating}</p>
                    <button className=" btn btn-outline mt-4" onClick={handlAddcard}>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Carddetails;