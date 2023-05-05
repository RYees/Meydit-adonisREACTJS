import React,{useState} from "react";
import { CustomButton, FormField, Loader } from '../components';
import logo from '../public/images/logo.png'
import Image from "next/image";

const Post = () => {
    const [form, setForm] = useState({
        userId: '',
        clothingtype: '',
        photo: '',
        description: '', 
        budget: '',
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
                <div className="mt-16">
                {/* <FormField 
                    labelName="Select clothing type *"
                    isSelectOption
                    value={form.clothingtype}
                    handleChange={(e) => handleFormFieldChange('firstname', e)}
                /> */}
               
                <select id="cloth" name="cloth" className="px-40 py-2 mb-5">
                    <option value="dres">Dress</option>
                    <option value="sari">Sari</option>
                    <option value="blouse">Blouse</option>
                </select>

                <FormField 
                    labelName="Upload Images*"
                    placeholder="Different Angle Images"
                    inputType='file'
                    value={form.photo}
                    handleChange={(e) => handleFormFieldChange('photo', e)}
                />
                <FormField 
                    labelName="Description *"
                    placeholder="Write a description"
                    inputType="text"
                    value={form.phonenumber}
                    handleChange={(e) => handleFormFieldChange('phonenumber', e)}
                />
                <FormField 
                    labelName="Budget *"
                    placeholder="Put the budget for the work"
                    inputType="number"
                    value={form.budget}
                    handleChange={(e) => handleFormFieldChange('budget', e)}
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
export default Post;
