import { Link } from "react-router-dom";

const Erorrepage = () => {
    return (
        <div className=" mt-20 ml-40">
            <h2>404 Page is not fount</h2>
            <Link to="/"><button className=" btn btn-neutral btn-outline mt-2">GO home</button></Link>
        </div>
    );
};

export default Erorrepage;