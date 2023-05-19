import Image from 'next/image'
import React, {useEffect} from 'react'
import logo from '../public/images/logo.png'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg';
import axiosLib from "axios";
const Navbar = () => {

  const axios = axiosLib.create({
    baseURL: "http://127.0.0.1:3333"
  });

  const logout = (e) => {
    e.preventDefault()
       axios
        .get("/auth/logout")
        .then((response) => {
        console.log("islogout",response);
        localStorage.removeItem("isLoggedIn");
        window.location.replace('/');
        });
  }
  return (
    <> 
    <div className=''>
       <div className='flex justify-between text-white'>
          <div>
          <Link href="/" className='cursor-pointer'>
            <Image src={logo} width={49} className='ml-5'/>
            </Link>
          </div>
          <div><p className='font-outfit my-1 text-2xl'>Welcome</p></div>
          <div className='mr-5 flex gap-5 text-xl transform underline'>
            <Link href="/jobs" className='cursor-pointer'>        
              Jobs       
            </Link>
            <Link href="/login" className='cursor-pointer'>        
              sign<strong>in</strong>       
            </Link>
            <Link href="/register"
               className='cursor-pointer'>        
              sign<strong>up</strong>       
            </Link>
            <Link href="#"
               className='cursor-pointer'>        
              < CgProfile size={35} className='my-1' onClick={logout}/>   
            </Link>
          </div>
       </div>
    </div>
    </>
  )
}

export default Navbar