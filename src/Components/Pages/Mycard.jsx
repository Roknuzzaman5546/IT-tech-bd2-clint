import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Authprovider/Authprovider";

const Mycard = () => {
    const { user } = useContext(Authcontext)
    const loadedmycards = useLoaderData();
    const filterUser = loadedmycards.filter(card => card.useremail === user.email)
    const [reaminguser, setUser] = useState(filterUser)

    const handleDelet = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assingment10-project-server-h5qum2jl3-rokonuzzamans-projects.vercel.app/card/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaings = filterUser.filter(cards => cards._id !== id)
                            setUser(remaings)
                        
                    })
            }
        })
    }

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-center font-rancho underline text-4xl text-gray-600 font-bold mt-10">Your all add products here</h2>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-10">
                {
                    reaminguser.map(mycard => <div key={mycard._id}>
                        <div className="card bg-gray-400 border-2 border-lime-600 h-96 shadow-xl">
                            <figure><img className=" h-48 w-full" src={mycard.photo} alt="Shoes" /></figure>
                            <div>
                                <p className=" ml-2 mt-3 font-bold bg-">{mycard.name}</p>
                                <h2 className=" ml-2 font-bold text-blue-800">{mycard.brand}</h2>
                                <p className=" text-white ml-2">Price: {mycard.price} Tk</p>
                                <div className=" flex">
                                    <p className="ml-2">{mycard.rating}</p>
                                </div>
                                <div className="card-actions justify-center mt-5">
                                    <button className="btn btn-outline" onClick={() => handleDelet(mycard._id)}>Delelte</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Mycard;