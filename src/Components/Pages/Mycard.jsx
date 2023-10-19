import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Mycard = () => {

    const loadedmycards = useLoaderData();
    const [user, setUser] = useState(loadedmycards)

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
                fetch(`http://localhost:5000/card/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaings = loadedmycards.filter(cards => cards._id !== id)
                            setUser(remaings)
                        }
                    })
            }
        })
    }

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-center text-3xl text-amber-500 font-bold mt-10">Your all add products here</h2>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-20">
                {
                    user.map(mycard => <div key={mycard._id}>
                        <div className="card bg-pink-300 h-96 shadow-xl">
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