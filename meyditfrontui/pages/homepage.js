import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import logo from '../public/images/logo.png'
import banner from '../public/images/banner.jpg'
import tailor from '../public/images/tailor.png'
import thread from '../public/images/thread.jpg'
import needle from '../public/images/needle.jpg'
import meter from '../public/images/meter.png'
import sicor from '../public/images/sicor.png'
import sicors from '../public/images/sicors.png'
import fold from '../public/images/fold.jpg'
import black from '../public/images/black.jpg'
import black2 from '../public/images/black2.jpg'
import brown from '../public/images/brown.jpg'
import brown2 from '../public/images/brown2.jpg'
import brown3 from '../public/images/brown3.jpg'
import anim from '../public/images/anim.png'
import anim2 from '../public/images/anim2.png'
import anim3 from '../public/images/anim3.png'
import anim4 from '../public/images/anim4.png'


const HomePage = () => {
  return (
    <>
    <div className=''>
       <div className='mx-5 my-3 relative'>
            <Image src={banner}  alt='home-banner'  className='h-[35rem]'/>
       </div>

       <div className='md:flex sm:gap-52 md:flex-1 -mt-[33rem] mx-20 absolute'>
        <div className='xl:w-96 sm:mt-36'>
            <h1 className='font-sans Roboto non-italic text-5xl md:text-6xl leading-10 md:text-justify mb-7'>Want a tailor?</h1>
            <p className='font-sans Roboto non-italic text-lg leading-7 text-justify mb-10'>You cannot tailor-make the situations in life but you can
              tailor-make the attitudes to fit those situations.
            </p>
            
            <Link href="/register" className='cursor-pointer'>
              <button 
                className='absolute z-10 md:cursor-pointer md:hover:filter md:hover:brightness-95 font-sans Roboto non-italic xl:text-xl leading-3 text-justify bg-[#664F39] p-5 rounded text-white'>
                Meet you tailor 
              </button>
            </Link>
        </div>
        <div className=''>
          <Image src={tailor}  alt='home-banner'  className='xl:h-[35rem] mt-5'/>
        </div>
       </div>
       
       <div className='absolute bg-[#000] bg-opacity-10 h-[45rem] w-full top-0 mt-12  '></div>
      
       <div className='absolute mx-5 max-w-2xl bg-[#FDF5EF] md:text-2xl mb-10 -mt-8 rounded'>
        <p className='leading-relaxed px-10 py-10 font-outfit'>Our platform connect tailors from different background with consumers who needs suits are handmade in our workshop in Meydit. Like our shirts, an individual 
          pattern will be drafted for you based on You based on your body and measurements</p>
       </div>
      
       <div className='md:flex md:justify-between'>
        <div className='md:flex md:gap-24 gap-10 mt-80 mx-12'>
          <div className='mx-16 mb-40'>
            <Image src={sicor}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] w-[8rem] mt-5'/>
            <Image src={sicor}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] w-[18rem] mt-5'/>
            <Image src={sicor}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] w-[8rem] mt-5'/>
            {/* <Image src={sicor}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] mt-5'/> */}
          </div>

          <div className='mx-10'>
           <Image src={sicors}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] w-[18rem] mt-5'/>
           <Image src={sicors}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] w-[18rem] mt-5'/>
           <Image src={sicors}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] w-[18rem] mt-5'/>
           {/* <Image src={sicors}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] mt-5'/> */}
          </div>
        </div>
      

       <div className='mx-5 max-w-2xl bg-[#FDF5EF] md:text-2xl mb-10 mt-20 md:mt-80 rounded'>
          <p className='relative leading-relaxed px-10 py-10 font-outfit'>Look for you customer, show off your talent, make money and be the best.
            sign up as a tailor to find work
          </p>
          
          <Link href="/register" className='cursor-pointer'>
            <button 
                className='mx-40 md:cursor-pointer md:hover:filter md:hover:brightness-95 font-sans Roboto non-italic xl:text-xl leading-3 text-justify bg-[#664F39] p-3 mb-10 md:mx-auto md:flex md:justify-center rounded text-white'>
                Get Started
            </button>
          </Link>
          <div className='md:flex md:gap-10 mx-5'>
          <Image src={thread}  alt='home-banner'  className='xl:h-[15rem] xl:w-[18rem] mt-5'/>
          <Image src={needle}  alt='home-banner'  className='xl:h-[15rem] xl:w-[19rem] mt-5'/>
          </div>
          <Image src={fold}  alt='home-banner'  className='-mt-10 mx-auto xl:h-[18rem] xl:w-[17rem] mt-5'/>
          <Image src={meter}  alt='home-banner'  className='xl:h-[15rem] xl:w-[17rem] -mt-36'/>
          <Image src={meter}  alt='home-banner'  className='xl:h-[15rem] xl:w-[17rem] -mt-56 float-right'/>
       </div>
       </div>

       <div className='my-32 mx-20 bg-[#FDF5EF] p-8 opacity-75'>
          <Image src={brown}  alt='home-banner'  className='-mt-10 mx-auto xl:h-[18rem] xl:w-[25rem] mt-5'/>
          <Image src={brown2}  alt='home-banner'  className='xl:h-[15rem] xl:w-[25rem] -mt-36'/>
          <Image src={brown3}  alt='home-banner'  className='xl:h-[15rem] xl:w-[25rem] -mt-56 float-right'/>`
       </div>
       
       <div className='md:flex md:justify-evenly my-32 mx-20 bg-[#FDF5EF] bg-opacity-10'>
          <Image src={anim}  alt='home-banner'  className='xl:h-[18rem] xl:w-[25rem] '/>
          <Image src={anim2}  alt='home-banner'  className='xl:h-[15rem] xl:w-[25rem] '/>
          <Image src={anim3}  alt='home-banner'  className='xl:h-[15rem] xl:w-[25rem] '/>
          <Image src={anim4}  alt='home-banner'  className='xl:h-[15rem] xl:w-[25rem] '/>
       </div>

       <div className='relative bg-[#FDF5EF] md:m-auto md:max-w-2xl w-96 mx-12'>
         <h1 className='text-5xl text-center py-5 font-bold'>Look for your</h1>
       </div>
       <div className='md:flex md:gap-10 md:justify-center md:mx-auto mb-36'>
            <Image src={black}  alt='home-banner'  className='relative mb-10 -ml-10 xl:h-[15rem] w-[29rem] ml-2.5 xl:w-[35rem]'/>
            <h1 className='font-outfit text-white md:mr-[41rem] md:py-20 md:mt-20 md:text-5xl absolute mx-10'>Tailor with fair price</h1>
            <Image src={black2}  alt='home-banner'  className='xl:h-[15rem] xl:w-[35rem] w-[29rem] ml-2.5'/>
            <h1 className='font-outfit text-white md:mt-[2rem] md:ml-[38rem] max-w-xl py-20 md:text-5xl absolute mx-10 md:-mx-16'>Tailor’s from professional to junior level</h1>
       </div>

       <div className='flex justify-center mb-36'>
          <p className='text-center text-6xl text-white'>
            Everyone is welcome<br></br>
            Work from home<br></br>
            Be the best
          </p>
       </div>

       <div className='flex justify-center mb-32'>
          <p className='text-white text-6xl text-center w-96 font-bold'>
            If you are out to describe the truth, leave elegance to the tailor
          </p>
       </div>

       <div className='flex flex-col justify-center'>
        <Image src={logo} alt='home-banner' width={49} className='mx-auto' />
        <p className='mx-auto font-bold text-xl'>Meydit - Bridge between tailor and consumer</p>
       </div>

    </div>
    </>
  )
}

export default HomePage