import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase";


export const Authcontext = createContext(null)
const provider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setloading] = useState(true)

    const userRegister = (email, password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignin = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userGooglelogin = () =>{
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenuser) => {
            setloading(false)
            setUser(currenuser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userLogout = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        userRegister,
        userGooglelogin,
        userSignin,
        userLogout
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