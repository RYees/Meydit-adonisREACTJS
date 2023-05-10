import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='bg-[#FDF5EF] h-screen'>
         <h1 className='text-5xl flex justify-center'>
            <strong className='mt-28 text-6xl'>Login as</strong>
        </h1>
        <div className='md:flex md:flex-wrap md:mx-80 mx-24 gap-6 md:gap-36'>
            <Link href="/signinuser" className='cursor-pointer'>
            <button
                className='focus:outline-none md:my-20 px-7 mt-7
                transition duration-700 ease-in-out transform capitalize 
                font-semibold hover:scale-110 cursor-pointer sm:border h-72
                border-b border-l border-r rounded-xl
                sm:border-b sm:border-l sm:border-r sm:rounded-xl
                md:w-11/12 md:w-80 bg-[#664F39] hover:bg-white hover:bg-opacity-95 
                hover:text-gray-500 text-white text-5xl md:mb-10 lighten-2 mb-9'
            >
            Consumer
            </button>
            </Link>

            <Link href="/signinmaker" className='cursor-pointer'>
            <button
                className='md:w-80 px-20 focus:outline-none md:my-20
                transition duration-700 ease-in-out transform capitalize 
                font-semibold hover:scale-110 cursor-pointer sm:w-96 sm:border h-72
                border-b border-l border-r rounded-xl
                sm:border-b sm:border-l sm:border-r sm:rounded-xl
                md:w-11/12 md:w-80 bg-[#664F39] hover:bg-white hover:bg-opacity-95 
                hover:text-gray-500 text-white text-5xl md:mb-10 lighten-2'
            >
            Tailor
            </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Login