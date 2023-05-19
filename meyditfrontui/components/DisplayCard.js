import React from "react";
import Image from 'next/image'
import dress6 from '../public/images/dress6.png'
import { useRouter } from "next/router";

const DisplayCard = (data) => {
  const router = useRouter();

  return (
    <>
   <div className="content">
    <div className='md:my-16 flex flex-col gap-10 md:flex md:flex-row border border-[#664F39] border-opacity-10'>
                <div><Image src={dress6} alt='home-banner'  className='h-[35rem]'/></div>
                <div className='md:flex md:flex-col md:leading-10 md:max-w-xl'>
                    <p className='flex justify-center mb-3'><strong className='mr-2'>Quotes</strong>{data.data.quotes.length}</p>
                    <p className='font-semibold mb-3 p-3'>Description</p>
                    <p className='font-outfit text-xl leading-relaxed mb-3 p-3'>{data.data.description}</p>
                    <p className='underline cursor-pointer p-3'>
                       <small onClick={()=>{
                                     router.push({
                                      pathname: `/jobs/${data.data}`,
                                      query: { data: JSON.stringify(data.data) }
                              });
                    }}
                    >see details</small>
                      </p>
                    <div className="md:flex md:justify-between gap-32">
                    <p className='flex justify-center'><small className="font-bold">Status</small> <small className='ml-2'>Open</small></p>
                    <p className='flex justify-center'><small className="font-bold">Budget</small> <small className='ml-2'>{data.data.budget}$</small></p>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
};
export default DisplayCard;
