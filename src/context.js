import { createContext,useContext, useEffect, useState } from "react";
import {GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from 'firebase/auth'
import { auth } from "./firebase";

const AuthContext = createContext(null);
const AuthProvider=({children})=>{
    const [user,setUser]=useState("")

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
const googleSignIn=()=>{
    const googleAuthProvider=new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
}

const logOut=()=>{
    return signOut(auth)
}
    return <AuthContext.Provider value={{googleSignIn,user,logOut}}>{children}</AuthContext.Provider>
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider};