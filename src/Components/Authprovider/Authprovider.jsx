import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase";


export const Authcontext = createContext(null)
const provider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setloading] = useState(true)

    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userGooglelogin = () =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        loading,
        userRegister,
        userGooglelogin
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

Authprovider.propTypes ={
    children: PropTypes.object.isRequired
}
export default Authprovider;