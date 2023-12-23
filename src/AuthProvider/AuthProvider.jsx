/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext=createContext()
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const gitHubProvider=new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(false)

    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile=(name,photoUrl)=>{
        setLoading(true)
      return  updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    }

    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
         setLoading(true)
         return signOut(auth)
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const githubSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }

    useEffect(()=>{
        setLoading(false)
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })

        return ()=>{
           return unSubscribe()
        }
    },[])

    const authInfo={
        createUser,
        user,
        loading,
        updateUserProfile,
        logIn,
        logOut,
        googleSignIn,
        githubSignIn
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;