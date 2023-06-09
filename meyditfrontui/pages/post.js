import React,{useState, useContext} from "react";
import { CustomButton, FormField, Loader } from '../components';
import logo from '../public/images/logo.png'
import Image from "next/image";
import axiosLib from "axios";
import { AuthContext } from '../context/auth-context';

const Post = () => {
    const {authState} = useContext(AuthContext);
    const [imageInput, setImageInput] = useState(null);
    const [image, setImage] = useState(null);
    const [types, setType] = useState("Dress")
    const [form, setForm] = useState({
        userId: '',
        clothingtype: '',
        polyimages: '',
        description: '', 
        country:'',
        status: '',
        budget: '',
       });
      
       const parseJson = (input) => {
        try {
          return JSON.parse(input);
        } catch (error) {
          return "error parsing input";
        }
      };
      const userdata = parseJson(authState);
      const axios = axiosLib.create({
        baseURL: "http://127.0.0.1:3333"
      });

      const post = (e) => {
        e.preventDefault()
          console.log('commit');
          let token = localStorage.getItem("token");
          if (token) {
          axios
            .post("/posts", {
                userId: userdata.id,
                clothingtype: types,
                polyimages: form.polyimages,
                description: form.description,
                country: form.country,
                status: "open",
                budget: form.budget
            })
            .then((response) => {
              response;
              //localStorage.setItem("token", token);
              console.log(response);
            });
        } else {console.log("unauthorized")}

      }
      
      const handleImage = (e) => {
        const file = e.target.files[0];
        setImageInput(file);
        console.log("filebad", imageInput);
        const fileReader = new FileReader();
        fileReader.onload = function(e){
         console.log(e.target.result);
          setImage(e.target.result);
        }
        fileReader.readAsDataURL(file)
      }
      const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
      }
    
    
  return (
    <>
    <div className="content bg-[#FDF5EF] h-full">
        <div className="md:mx-56">
            <form onSubmit={post} className="w-full  flex flex-col gap-[30px]">
                <div className="mt-16">             
               <lable className="mb-4">Select Clothing Type</lable><br></br>
                <select id="cloth" name="cloth" className="px-40 py-2 mb-5" 
                    value={types}
                    onChange={(e) => {
                    setType(e.target.value);
                    }}
                    >
                    <option value="Dress">Dress</option>
                    <option value="Sari">Sari</option>
                    <option value="Blouse">Blouse</option>
                </select>

                <FormField
                    labelName="Upload Images*"
                    placeholder="Different Angle Images"
                    name="polyimages"
                    inputType='file'
                    //onChange={handleImage}
                    value={form.polyimages}
                    handleChange={(e) => handleFormFieldChange('polyimages', e)}
                />
                <div>
                 {image&& <img src={image} alt="photo" className='h-[5rem]'/>}
                </div>
                {/* <FormField 
                    labelName="Description *"
                    placeholder="Write a description"
                    inputType="text"
                    name="description"
                    value={form.description}
                    handleChange={(e) => handleFormFieldChange('description', e)}
                /> */}
                
                <FormField 
                    labelName="Description *"
                    placeholder="Write a description"
                    isTextArea
                    name="description"
                    value={form.description}
                    handleChange={(e) => handleFormFieldChange('description', e)}
                  />
                
                <FormField 
                    labelName="Country *"
                    placeholder="Write your country"
                    inputType='text'
                    value={form.country}
                    handleChange={(e) => handleFormFieldChange('country', e)}
                />   

                <FormField 
                    labelName="Budget *"
                    placeholder="Put the budget for the work"
                    inputType="number"
                    name="budget"
                    value={form.budget}
                    handleChange={(e) => handleFormFieldChange('budget', e)}
                />
                </div>               
                <div className="flex justify-center items-center mt-[40px] mb-10">
                    <CustomButton 
                    btnType="submit"
                    title="Post"
                    styles="bg-[#664F39]"
                    // handleClick={post}
                    />
                </div>
            </form>
        </div>
    </div>
    </>
  );
};
export default Post;
