import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    // for dark theme
    const [isDark,setDark]= useState(false);
    // loader used so that logged users don't get nagivated when they refresh
    const [loading,setLoading] = useState(true);
    // to update last name in update form
    const [dispLastName,setdispLastName] = useState(null);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGitHub =()=>{
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }
    const logInWithEmail = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =  () =>{
        return signOut(auth);
    }
    const updateUser = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })}
    useEffect(() => {
        // auth observer to know user is logged in or not
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => 
        { setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])


    // all these info will be avaiable to the wholw website
    const authInfo = {user,setUser,setDark,isDark,logInWithEmail,
        loading,createUser,signInWithGoogle,signInWithGitHub,logOut,
        updateUser,setLoading,dispLastName,setdispLastName}
    return (
        <div>
            <AuthContext.Provider
            value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;