import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);
    const [foods, setFoods] = useState([]);
    const [feedbackData, setFeedbackData] = useState([]);


    const errorMessage = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const sweetMessage = (message) => {
        Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        fetch("http://localhost:5000/feedback")
            .then(res => res.json())
            .then(data => {
                setFeedbackData(data)
            })
    }, [control])

    useEffect(() => {
        fetch("http://localhost:5000/food")
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
    }, [control])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // ------------------------------------------
            const loggedUser = { email: currentUser?.email || user?.email }

            if (currentUser) {
                axios.post("http://localhost:5000/jwt", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axios.post("http://localhost:5000/logout", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }

        })
        return () => {
            unsubscribe();
        }
    }, [user])



    const authInfo = {
        user,
        loading,
        control,
        foods,
        feedbackData,
        errorMessage,
        sweetMessage,
        setUser,
        registerUser,
        loginUser,
        loginWithGoogle,
        logoutUser,
        setControl,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}