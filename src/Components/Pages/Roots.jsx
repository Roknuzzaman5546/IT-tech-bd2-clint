import { Outlet } from "react-router-dom";
import Headars from "./Haedars";

const Roots = () => {
    return (
        <div>
            <Headars></Headars>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;