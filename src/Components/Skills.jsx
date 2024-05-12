import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import Taillwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import reactjs from '../assets/reactjss.png'


const Skills = () => {
  return (
    <div className=' border border-gray-400 bg-black text-gray-400 md:h-[150px] max-w-[1288px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
   <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
    My <br />Tech <br />Stack
    </h2>    
    <div className='flex flex-col items-center m-4 sm:my-8 w-[88px] md:w-[100px]'>
        <img src={html} alt="" width={100} height={100} />
        <p className='mt-2'>Html</p>
        </div> 
        <div className='flex flex-col items-center m-4 sm:my-8 w-[88px] md:w-[100px]'>
        <img src={css} alt="" width={100} height={100} />
        <p className='mt-2'>Css</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-8 w-[88px] md:w-[100px]'>
        <img src={Javascript} alt="" width={100} height={100} />
        <p className='mt-2'>Javascript</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-8 w-[88px] md:w-[100px]'>
         <img src={Taillwind} alt="" width={100} height={100} />
        <p className='mt-2'>Taillwind</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-8 w-[88px] md:w-[100px]'>
        <img src={reactjs} alt=""  width={100} height={100}/>
        <p className='mt-2'>React.js</p>
        </div>

    </div>
  )
}

export default Skills;
