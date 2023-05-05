import Image from 'next/image'
import React, {useEffect} from 'react'
import logo from '../public/images/logo.png'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg';
const Navbar = () => {
  return (
    <> 
    <div className=''>
       <div className='flex justify-between text-white'>
          <div>
          <Link href="/" className='cursor-pointer'>
            <Image src={logo} width={49} className='ml-5'/>
            </Link>
          </div>
          <div><p className='font-outfit my-1 text-2xl'>Welcome, rehmet</p></div>
          <div className='mr-5 flex gap-5 text-xl transform underline'>
            <Link href="/jobs" className='cursor-pointer'>        
              Jobs       
            </Link>
            <Link href="/signin" className='cursor-pointer'>        
              sign<strong>in</strong>       
            </Link>
            <Link href="/register"
               className='cursor-pointer'>        
              sign<strong>up</strong>       
            </Link>
            <Link href="/"
               className='cursor-pointer'>        
              < CgProfile size={35} className='my-1'/>   
            </Link>
          </div>
       </div>
    </div>
    </>
  )
}

export default Navbar