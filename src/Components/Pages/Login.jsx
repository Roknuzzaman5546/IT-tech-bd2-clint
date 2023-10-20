import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import {  FcGoogle } from "react-icons/fc";

const Login = () => {
    const { userGooglelogin, userSignin } = useContext(Authcontext)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        userGooglelogin()
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/')
                    }, 1500)
                }
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')
        userSignin(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Login succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/')
                    }, 1500)
                }

            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-orange-300">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-500">
                        <form className="card-body"  onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p className=" font-bold text-red-600 text-sm">{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                            <button className="btn font-bold text-xl btn-outline" onClick={handleGoogleLogin}> <FcGoogle></FcGoogle> Google</button>
                            <h2>If you new go to <Link to='/register' className=" font-bold text-blue-600 text-xl">Register</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;