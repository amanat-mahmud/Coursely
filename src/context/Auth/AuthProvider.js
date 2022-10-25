import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isDark,setDark]= useState(false);
    const authInfo = {user,setUser,setDark,isDark}
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