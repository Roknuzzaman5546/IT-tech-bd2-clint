import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";
import logo from '../../assets/logo.png'

const Headars = () => {
    const { user, userLogout } = useContext(Authcontext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme]);
    const handletheme = (event) => {
        if (event.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

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
            <div className="navbar bg-base-300 py-5">
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

                        <label onClick={handletheme} className="cursor-pointer grid place-items-center">
                            <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>

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