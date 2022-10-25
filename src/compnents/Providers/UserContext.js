import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const UserContext = ({children}) => {
    const [user,setUser] = useState(null)

    const registerWithGoogle=()=>{
        return signInWithPopup(auth,provider);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const registerNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile=(fullName,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName : fullName, photoURL : photoURL
        })
    }

    const loginWithEmailPassword = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })

        return unsubscribe();

    },[])

    const contextInfo = {registerWithGoogle,setUser,user,logOut,registerNewUser,updateUserProfile,loginWithEmailPassword}
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;