
const Threepriducts = ({ product }) => {
    const { name, rating, price, photo } = product;

    return (
        <div>
            <div className="flex justify-between items-center h-60 p-4 rounded-lg bg-sky-400 shadow-xl">
                <figure className="w-full"><img className=" h-60" src={photo} alt="Album" /></figure>
                <div className=" w-full space-y-2 flex flex-col items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>Pice: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-neutral mt-2">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Threepriducts;