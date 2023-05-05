import React from "react";
import Image from 'next/image'
import dress1 from '../public/images/dress1.png'
import dress2 from '../public/images/dress2.png'
import dress3 from '../public/images/dress3.png'
import dress4 from '../public/images/dress4.png'
import dress5 from '../public/images/dress5.png'
import dress6 from '../public/images/dress6.png'
const DisplayCard = () => {
    
  return (
    <>
    <div className="content">
    <div className='md:my-16 flex flex-col gap-10 md:flex md:flex-row border border-[#664F39] border-opacity-10'>
                <div><Image src={dress1}  alt='home-banner'  className='h-[35rem]'/></div>
                <div className='md:flex md:flex-col md:leading-10 md:max-w-xl'>
                    <p className='flex justify-center mb-3'><strong className='mr-2'>Quotes</strong>10</p>
                    <p className='font-semibold mb-3 p-3'>Description</p>
                    <p className='font-outfit text-xl leading-relaxed mb-3 p-3'>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua orem ipsum dolor sit amet, 
                        consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et ....
                    </p><p className='underline cursor-pointer p-3'><small>see details</small></p>
                    <p className='flex justify-center'><strong>Status</strong> <small className='ml-2'>Open</small></p>
                </div>
            </div>
    </div>
    </>
  );
};
export default DisplayCard;
