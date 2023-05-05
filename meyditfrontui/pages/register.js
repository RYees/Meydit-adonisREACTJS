import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='bg-[#FDF5EF] h-screen'>
         <h1 className='text-5xl flex justify-center'>
            <strong className='mt-28'>Register as</strong>
        </h1>
        <div className='flex justify-center gap-36'>
            <Link href="/signupconsumer" className='cursor-pointer'>
            <button
                className='focus:outline-none my-20
                transition duration-700 ease-in-out transform capitalize 
                font-semibold hover:scale-110 cursor-pointer sm:border h-72
                border-b border-l border-r rounded-xl
                sm:border-b sm:border-l sm:border-r sm:rounded-xl
                md:w-11/12 xl:w-80 bg-[#664F39] hover:bg-white hover:bg-opacity-95 
                hover:text-gray-500 text-white text-5xl mb-10 lighten-2'
            >
            Consumer
            </button>
            </Link>

            <Link href="/signuptailor" className='cursor-pointer'>
            <button
                className='sm:px-5 px-6 w-72 focus:outline-none my-20
                transition duration-700 ease-in-out transform capitalize 
                font-semibold hover:scale-110 cursor-pointer sm:w-96 sm:border h-72
                border-b border-l border-r rounded-xl
                sm:border-b sm:border-l sm:border-r sm:rounded-xl
                md:w-11/12 xl:w-80 bg-[#664F39] hover:bg-white hover:bg-opacity-95 
                hover:text-gray-500 text-white text-5xl mb-10 lighten-2'
            >
            Tailor
            </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Register