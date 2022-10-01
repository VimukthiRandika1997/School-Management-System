import React from 'react'
import Image from 'next/image'
import mypic from '../assets/vithushan.jpeg'
import { AiFillHome, AiFillIdcard,AiFillGold,AiFillMail,AiFillFire } from "react-icons/ai";

function profile() {
    var name="Vithushan"
    var grade=34
    
  return (
    <div>
        <div className='h-screen lg:w-1/4 sm:w-1/3 dark:bg-primary' >
            {/* Image Container */}
            <div className='lg:p-8 bg-grey sm:p-5 md:p-3'>
                <Image
                src={mypic}
                alt="Picture of the user"
                width="200px"
                height="200px"

                className='max-w-full rounded-full lg:h-200'
                />
            </div>

            {/* Details  Container */}
            <div>
                <h1 className='flex pl-10 text-4xl lg:text-white'>{name}</h1>
                <h1 className='flex items-center pl-10 mt-3 text-4xl lg:text-white'>{grade}</h1>
            
            </div>

            {/* Routing page */}
            <div className='mt-20'>
               
                <a href='welcome' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillHome className='mr-3'/> Home</a>
                <a href='index' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillIdcard className='mr-3'/> Staff Details</a>
                <a href='#' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillGold className='mr-3'/> Classes</a>
                <a href='#' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillMail className='mr-3'/> Chat Box</a>
                <a href='#' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillFire className='mr-3'/> Updated News</a>
                
            </div>
        </div>
    </div>
  )
}

export default profile;