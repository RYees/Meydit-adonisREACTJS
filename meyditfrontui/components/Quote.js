import React,{useState, useContext} from "react";
import { CustomButton, FormField, Loader } from '../components';
import axiosLib from "axios";
import { AuthContext } from '../context/auth-context';
const Quote = (data) => {  
  const {authState} = useContext(AuthContext);
  const parseJson = (input) => {
    try {
      return JSON.parse(input);
    } catch (error) {
      return "error parsing input";
    }
  };
  const taildata = parseJson(authState);
  const [form, setForm] = useState({
        makerId: '',
        postId: '',
        price: '',
        comments: '', 
        email: '',
       });

       const axios = axiosLib.create({
        baseURL: "http://127.0.0.1:3333"
      });

      const quote = (e) => {
        e.preventDefault()
          console.log('commit');
          axios
            .post("/quotes", {
                price: form.price,
                comments: form.comments,
                email: form.email,
                makerId: taildata.id, // fecth from local storage
                postId: data.data.id
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
    <div className="content bg-[#FDF5EF] h-full border">
        <div className="md:mx-56">
          <h1 className="uppercase text-[#664F39] flex justify-center text-5xl">Send Quotation</h1>
            <form onSubmit={quote} className="w-full  flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[40px] mt-16">
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
                    title="Quote"
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
