import React,{useState} from "react";
import { CustomButton, FormField, Loader } from '../components';
import axiosLib from "axios";
const Signinuser = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
      });

      const axios = axiosLib.create({
        baseURL: "http://127.0.0.1:3333"
      });

      const login = (e) => {
        e.preventDefault()
          // console.log('commit');
          // console.log("run", form);
          //let token = localStorage.getItem("token");
          axios
            .post("/auth/user/login", {
                email: form.email,
                password: form.password
                          })
            .then((response) => {
              response;
              localStorage.setItem("isLoggedIn", JSON.stringify(response.data.guards.user.user));
              console.log(response.data.guards.user.user);
              window.location.replace('/jobs');
            });
      }
    
      const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
      }
    
  return (
    <>
    <div className="content bg-[#FDF5EF] h-sreen">
    <div className="md:mx-56">
            <form className="w-full flex flex-col gap-[30px]">
            <div className="md:flex md:flex-col gap-[40px] mx-64 my-36">
                <FormField 
                    labelName="Your Email *"
                    placeholder="John Doe"
                    inputType="email"
                    value={form.firstname}
                    handleChange={(e) => handleFormFieldChange('email', e)}
                />
                <FormField 
                    labelName="Your Password *"
                    placeholder="your password"
                    inputType="password"
                    value={form.lastname}
                    handleChange={(e) => handleFormFieldChange('password', e)}
                />
                <div className="flex justify-center items-center mt-[40px] mb-10">
                    <CustomButton 
                    btnType="submit"
                    title="Login"
                    styles="bg-[#664F39]"
                    handleClick={login}
                    />
                </div>
              </div>
            </form>
        </div>
    </div>
    </>
  );
};
export default Signinuser;
