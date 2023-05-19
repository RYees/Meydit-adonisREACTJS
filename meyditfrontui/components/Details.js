import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaDownload} from 'react-icons/fa'
import Quote from './Quote'
import { useState, useEffect, useContext } from "react";
// import { items } from "../public/Items.json";
import dress6 from '../public/images/dress6.png'
import { useRouter } from "next/router";
import { AuthContext } from '../context/auth-context';

const Details = () => {
  const router = useRouter();
  const {authState,isUserAuthenticated} = useContext(AuthContext);
 
  let result;
  const parseJson = (input) => {
    try {
      return JSON.parse(input);
    } catch (error) {
      return "error parsing input";
    }
  };
  const data = parseJson(router.query.data);
  const taildata = parseJson(authState);
  // console.log("moshing",taildata.amount);

  if (!data.quotes) {
    console.log("not found");
    }
  else {
    result = data ? data.quotes.length : 0;
  }   
  useEffect(() => {
      isUserAuthenticated();  
  }, []);

  return (
    <div className='bg-[#FDF5EF] h-full'>
       <div>
       {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          {bootstrap.map((item) => (
            <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
              <img src={item.imageUrl} alt="slides" />
              <Carousel.Caption className={styles.caption}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button className="btn btn-danger">Visit Docs</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel> */}
        
        <div className='bg-[#000]'>
          <Image src={dress6}  alt='home-banner'  className='xl:h-[35rem] mt-5'/>
        </div>
        
        <div className='md:flex md:justify-between'>
            <div className='md:flex gap-5 mx-1'>
              <p className='md:flex md:justify-center mb-3'><strong className='mr-2'>Quotes</strong>{result}</p>
                 <p className='md:flex md:justify-center'><strong>Status</strong> <small className='ml-2 mt-1'>Open</small></p> 
            </div>
            <button className='md:flex md:justify-end gap-1 bg-[#664F39] md:w-20 p-2 m-3'>
                <FaDownload className='text-[#FDF5EF]'/>
                <strong><small className='text-white text-sm rounded'>images</small></strong>
            </button>
        </div>


        <div className='mx-32 mt-16 mb-20'>
            <p className='font-bold mb-1 leading-10 p-3'>Description</p>
            <p className='font-outfit text-xl leading-relaxed mb-3 p-3'>{data.description}
            </p>
        </div>

        {taildata.amount === undefined ?
        null
        :<Quote data={data.id}/>}
       </div>
    </div>
  )
}

export default Details

