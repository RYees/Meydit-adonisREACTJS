import Image from 'next/image'
import React, {useEffect} from 'react'
import logo from '../public/images/logo.png'
import Link from 'next/link'
// import { Box, Flex } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <> 
    <div className='static'>
       <div className='flex justify-between text-white'>
          <div><Image src={logo} width={49} className='ml-5' /></div>
          <div className='mr-5 flex gap-5 text-xl transform underline'>
            <Link href="/" className=''>        
              Jobs       
            </Link>
            <Link href="/">        
              sign<strong>in</strong>       
            </Link>
            <Link href="/">        
              sign<strong>up</strong>       
            </Link>
          </div>
       </div>
    </div>
    </>
  )
}

export default Navbar