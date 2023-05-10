import React,{useState} from "react";
import { CustomButton, FormField, Loader } from '../components';
import axiosLib from "axios";
const Signout = () => {
      const axios = axiosLib.create({
        baseURL: "http://127.0.0.1:3333"
      });

      const logout = (e) => {
        e.preventDefault()
           axios
            .post("/auth/logout")
            .then((response) => {
            console.log("islogout",response);
            localStorage.removeItem("token");
            });
      }
    
  return (
    <>
    <div className="content bg-[#FDF5EF] h-sreen">
    <div className="md:mx-56">
               <div className="flex justify-center items-center mt-[40px] mb-10">
                    <CustomButton 
                    btnType="submit"
                    title="Login"
                    styles="bg-[#664F39]"
                    handleClick={logout}
                    />
                </div>
            </div>
    </div>
    </>
  );
};
export default Signout;
