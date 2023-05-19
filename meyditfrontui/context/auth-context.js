// src/context/auth-context.js
import React, { use } from "react";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";
export const AuthContext = React.createContext();
//const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState([]);
  
  const isUserAuthenticated = () => {
    // checks if the user is authenticated   
   if(typeof window !== "undefined") {
        const value = localStorage.getItem("isLoggedIn") || ""
        setAuthState(value)
        if(value){}
        else{
          router.push("/login");   
        }      
    } 
   };

   useEffect(() => {
    isUserAuthenticated();
   },[])

 return (
   <AuthContext.Provider
     value={{
        isUserAuthenticated,
        authState
    }}
   >
    {children}
   </AuthContext.Provider>
 );
};
