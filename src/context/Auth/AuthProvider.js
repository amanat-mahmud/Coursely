import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import app from "../../firebase/firebase.config"
export const AuthContext = createContext();
const auth = getAuth(app);
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isDark,setDark]= useState(false);
    const [price,setPrice]= useState(0);
    const [loading,setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {user,setUser,setDark,isDark,price,setPrice,loading,createUser}
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