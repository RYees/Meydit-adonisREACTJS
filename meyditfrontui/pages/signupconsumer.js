import React,{useState} from "react";
import { CustomButton, FormField, Loader } from '../components';
import logo from '../public/images/logo.png'
import Image from "next/image";
import axiosLib from "axios";
const Signup = () => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        postcode: '', 
        country: '',
        state: '',
        photo: '',
        email: '',
        password: ''
      });
      const axios = axiosLib.create({
        baseURL: "http://127.0.0.1:3333"
      });

      const register = (e) => {
        e.preventDefault()
          console.log('commit');
          console.log("run", form);
          //let token = localStorage.getItem("token");
          axios
            .post("/auth/consumer/register", {
                firstname: form.firstname,
                lastname: form.lastname,
                phonenumber: form.phonenumber,
                postcode: form.postcode,
                country: form.country,
                state: form.state,
                photo: form.photo,
                email: form.email,
                password: form.password,
                //role_id: 2
            })
            .then((response) => {
              response;
              //localStorage.setItem("token", token);
              console.log(response);
            });
      }
      const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      }
    
  return (
    <>
    <div className="content bg-[#FDF5EF] h-full">
            
        <div className="md:mx-56">
            <form className="w-full  flex flex-col gap-[30px]">
                <div className="flex flex-wrap gap-[40px] mt-16">
                <FormField 
                    labelName="Your first Name *"
                    placeholder="John Doe"
                    inputType="text"
                    value={form.firstname}
                    handleChange={(e) => handleFormFieldChange('firstname', e)}
                />
                <FormField 
                    labelName="Your last Name *"
                    placeholder="John Doe"
                    inputType="text"
                    value={form.lastname}
                    handleChange={(e) => handleFormFieldChange('lastname', e)}
                />
                <FormField 
                    labelName="Phone number *"
                    placeholder="Write a number"
                    inputType="text"
                    value={form.phonenumber}
                    handleChange={(e) => handleFormFieldChange('phonenumber', e)}
                />
                <FormField 
                    labelName="Postcode *"
                    placeholder="Write a postcode"
                    inputType="number"
                    value={form.postcode}
                    handleChange={(e) => handleFormFieldChange('postcode', e)}
                />
                </div>

                <div className="w-full flex justify-start items-center p-4 bg-[#664F39] h-[120px] rounded-[10px]">
                <Image src={logo} alt="ad" className="w-[40px] h-[40px] object-contain"/>
                <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">Wear Tailored Made Cloth and Be Stylish!</h4>
                </div>

                <FormField 
                    labelName="Country *"
                    placeholder="Write your country"
                    inputType='text'
                    value={form.country}
                    handleChange={(e) => handleFormFieldChange('country', e)}
                />   

                <FormField 
                    labelName="State *"
                    placeholder="Write your state"
                    inputType='text'
                    value={form.state}
                    handleChange={(e) => handleFormFieldChange('state', e)}
                />
                
                <FormField 
                    labelName="Profile Photo *"
                    placeholder="Write your personal photo"
                    inputType='file'
                    value={form.photo}
                    handleChange={(e) => handleFormFieldChange('photo', e)}
                />

                <FormField 
                    labelName="Email *"
                    placeholder="Write your email"
                    inputType='email'
                    value={form.email}
                    handleChange={(e) => handleFormFieldChange('email', e)}
                />

                <FormField 
                    labelName="Password *"
                    placeholder="Write your password"
                    inputType='password'
                    value={form.password}
                    handleChange={(e) => handleFormFieldChange('password', e)}
                />

                
                <div className="flex justify-center items-center mt-[40px] mb-10">
                    <CustomButton 
                    btnType="submit"
                    title="Register"
                    styles="bg-[#664F39]"
                    handleClick={register}
                    />
                </div>
            </form>

            
        </div>
    </div>
    </>
  );
};
export default Signup;
