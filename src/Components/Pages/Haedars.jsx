import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const Headars = () => {

    const {user, userLogout} = useContext(Authcontext)

    const handleLogout = () =>{
        userLogout()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproducts">Addproducts</NavLink></li>
        <li><NavLink to="/mycard">My card</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <a className="btn" onClick={handleLogout}>Sign out</a> : <a className="btn">Log in</a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Headars;