import {  createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    });

    return(
        <AuthContext.Provider value={{loading,setLoading,user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
