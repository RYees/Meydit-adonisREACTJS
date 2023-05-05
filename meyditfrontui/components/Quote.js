import React,{useState} from "react";
import { CustomButton, FormField, Loader } from '../components';
import logo from '../public/images/logo.png'
import Image from "next/image";

const Quote = () => {
    const [form, setForm] = useState({
        makerId: '',
        postId: '',
        price: '',
        comments: '', 
        email: '',
       });
    
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
            <form onSubmit={handleSubmit} className="w-full  flex flex-col gap-[30px]">
                <div className="flex flex-wrap gap-[40px] mt-16">
                <FormField 
                    labelName="Offer Price *"
                    placeholder="put your offer price"
                    inputType="text"
                    value={form.price}
                    handleChange={(e) => handleFormFieldChange('price', e)}
                />
                <FormField 
                    labelName="Your comment *"
                    placeholder="Make your comment  "
                    inputType="text"
                    value={form.comments}
                    handleChange={(e) => handleFormFieldChange('comments', e)}
                />
                <FormField 
                    labelName="Email *"
                    placeholder="put your email"
                    inputType="email"
                    value={form.email}
                    handleChange={(e) => handleFormFieldChange('email', e)}
                />
              </div>
                
                <div className="flex justify-center items-center mt-[40px] mb-10">
                    <CustomButton 
                    btnType="submit"
                    title="Post"
                    styles="bg-[#664F39]"
                    />
                </div>
            </form>
        </div>
    </div>
    </>
  );
};
export default Quote;
