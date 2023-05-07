import React, {useEffect, useState, Component} from 'react'
import {FiSearch} from 'react-icons/fi'
import DisplayCard from '../../components/DisplayCard'
//import { CustomButton, FormField, Loader } from '../../components';
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";

const endpoint ='http://127.0.0.1:3333/posts';
export async function getServerSideProps(){
    const res = await fetch(endpoint);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}
const Jobs = ({data}) => {
    const router = useRouter();
    console.log("nmn", data[0].quotes.length)
    const[users, fetchUsers] = useState([]);

    const fetchEvents = async () =>{
        const val = await axios.get("http://127.0.0.1:3333/users");
        console.log("sinnmn", val)
        fetchUsers(val)
        console.log("lopo",users)
    }
  return (
<> 
    <div className='bg-[#FDF5EF] h-full'>
        <Link href="/post" className='cursor-pointer mt-10'>
            <button className='text-xl text-white rounded bg-[#664F39] mx-3 my-4 p-4'>Post</button>
        </Link>
       <div className='md:flex md:justify-between md:flex-1 px-10'>
         <div className='md:my-36 md:leading-10'>
            <h2 className='text-justify font-bold text-lg'>Filter by</h2>
            <div className='flex gap-20 md:flex-col'>
                <div>
                    <h3 className='font-semibold'>Clothing Type</h3>
                    <div className='flex flex-col'>
                        <div>
                            <input type='checkbox' className=''/>
                            <label className='ml-2'>Dress</label>
                        </div>
                        <div>
                            <input type='checkbox' className=''/>
                            <label className='ml-2'>Sari</label>
                        </div>

                        <div>
                            <input type='checkbox' className=''/>
                            <label className='ml-2'>Blouse</label>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='font-semibold'>Location</h3>
                    <div>
                        <select id="cars" name="cars">
                            <option value="volvo">Australia</option>
                            <option value="saab">India</option>
                            <option value="mercedes">Pakistan</option>
                            <option value="audi">Beruit</option>
                        </select>
                    </div>
                </div>
            </div>

           </div>
         <div>

         <div className='my-5 md:mx-5 md:w-[70rem] bg-white md:text-2xl mb-10 rounded'>
           <div className='flex md:mx-40'>
                <input type="text" placeholder='search jobs' value="" name="search" className='bg-[#FDF5EF] border py-2 px-4
                w-[50rem] m-3'/>
                <div className='mt-2'>
                    <div className='h-10 mt-2 w-10 bg-[#664F39] rounded-full'></div>           
                    <div className='-mt-8 ml-1'><FiSearch size={30} className='text-white rotate-90'/></div>
                </div>
           </div>
           {/* <DisplayCard/> */}
           <div marginX="20" marginTop={10}>
                {data.map((value, index) => {
                    return <DisplayCard data={value} key={index}></DisplayCard>;
                })}
            </div>
        </div>

     </div>
        {/*  */}
      </div>
    </div>
    </>
  )
}

export default Jobs