import Image from 'next/image'
import React, {useEffect} from 'react'
import banner from '../public/images/banner.jpg'

const HomePage = () => {
  return (
    <>
    <div className=''>
       <div className='mx-5 my-3 relative'>
            <Image src={banner}  alt='home-banner'  className='h-[35rem]'/>
       </div>
       <div className='absolute bg-[#6C6868] h-screen w-full -mt-56'></div>
    </div>
    </>
  )
}

export default HomePage