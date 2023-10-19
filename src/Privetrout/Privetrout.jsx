import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Components/Authprovider/Authprovider";
import PropTypes from 'prop-types';

const Privetrout = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

Privetrout.propTypes ={
    children: PropTypes.object
}

export default Privetrout;