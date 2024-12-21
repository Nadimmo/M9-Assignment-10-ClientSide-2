/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.confige";



const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider()
export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    const register = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    const loginWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,GoogleProvider)
    }

    const loginWithGithub = ()=>{
        setLoader(true)
        return signInWithPopup(auth,GithubProvider)
    }

    const updateUserProfile = (name,image)=>{
        setLoader(true)
        return updateProfile(auth.currentUser)
    }

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('observe in user', currentUser)
            setLoader(false)

        })
        return ()=>{
            UnSubscribe()
        } 
            
    },[])

    const authInfo = {
        user,
        loader,
        register,
        login,
        logOut,
        loginWithGoogle,
        loginWithGithub,
        updateUserProfile,
        
    }
    return (
            <div>
                <AuthContext.Provider value={authInfo}>
                    {
                        children
                    }
                </AuthContext.Provider>
            </div>
       
        
    );
};

export default AuthProvider;