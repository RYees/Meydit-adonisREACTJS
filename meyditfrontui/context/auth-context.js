// src/context/auth-context.js
import React from "react";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";
export const AuthContext = React.createContext();
//const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState([]);
  let isLoggedIn;
  //!!window ? isLoggedIn = window.localStorage.getItem("isLoggedIn") : ""

//   let isLoggedIn = localStorage.getItem("isLoggedIn");
  
  const isUserAuthenticated = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("isLoggedIn") || ""
        setAuthState(value)
        if(value){}
        else{
          router.push("/");   
        }
      
    } 
   };

  useEffect(() => {
    // checks if the user is authenticated   
  }, []);

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

// export { AuthContext, AuthProvider };