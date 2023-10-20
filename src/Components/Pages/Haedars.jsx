import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";
import logo from '../../assets/logo.png'

const Headars = () => {

    const { user, userLogout } = useContext(Authcontext)

    const handleLogout = () => {
        userLogout()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproducts">Addproducts</NavLink></li>
        <li><NavLink to="/mycard">My card</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-bold rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className=" flex gap-1 items-center">
                        <img className=" w-11 rounded-3xl" src={logo} alt="" />
                        <a className="btn btn-ghost normal-case text-3xl font-rancho italic font-bold">I <span className=" text-red-500">TECH</span> BD</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex md:flex-row flex-col-reverse gap-2 items-center">
                    {
                        user ? <h2 className=" font-bold mr-2 text-gray-600 btn btn-outline">{user.displayName}</h2> : ''
                    }
                    {
                        user ? <a className="btn font-bold btn-outline" onClick={handleLogout}> Sign out </a> : <li className="btn font-bold btn-outline"><NavLink to="/login">Login</NavLink></li>
                    }
                </div>
            </div>
        </div>
    );
};

export default Headars;