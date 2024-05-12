import React from 'react'
import user from '../assets/user.png'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
        <p className='text-gray-400 '>Check out some of my recent work</p>
      </div>
     
      <div className='grid sm:grid-cols-3 gap-4'>
       <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
       shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative '>
        <img src={user}  alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[#e1e1e1] absolute inset-0 flex flex-col justify-center items-center '>
            <span className='text-2xl font-bold text-white tracking-wide '>Project 1</span>
            <div className='pt-8 text-center '>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                   Live
                </button>
            </a>
            </div>
             
          </div>
       </div>
       <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
       shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative '>
        <img src={user}  alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[#e1e1e1] absolute inset-0 flex flex-col justify-center items-center '>
            <span className='text-2xl font-bold text-white tracking-wide '>Project 2</span>
            <div className='pt-8 text-center '>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                   Live
                </button>
            </a>
            </div>
             
          </div>
       </div>
       <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
       shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative '>
        <img src={user}  alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[#e1e1e1] absolute inset-0 flex flex-col justify-center items-center '>
            <span className='text-2xl font-bold text-white tracking-wide '>Project 3</span>
            <div className='pt-8 text-center '>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                   Live
                </button>
            </a>
            </div>
             
          </div>
       </div>
       <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
       shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative '>
        <img src={user}  alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[#e1e1e1] absolute inset-0 flex flex-col justify-center items-center '>
            <span className='text-2xl font-bold text-white tracking-wide '>Project 4</span>
            <div className='pt-8 text-center '>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                   Live
                </button>
            </a>
            </div>
             
          </div>
       </div>
       <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
       shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative '>
        <img src={user}  alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[#e1e1e1] absolute inset-0 flex flex-col justify-center items-center '>
            <span className='text-2xl font-bold text-white tracking-wide '>Project 5</span>
            <div className='pt-8 text-center '>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                   Live
                </button>
            </a>
            </div>
             
          </div>
       </div>
       <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
       shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center  h-[200px] bg-cover relative '>
        <img src={user}  alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[#e1e1e1] absolute inset-0 flex flex-col justify-center items-center '>
            <span className='text-2xl font-bold text-white tracking-wide '>Project 6</span>
            <div className='pt-8 text-center '>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                   Live
                </button>
            </a>
            </div>
             
          </div>
       </div>
      </div>
     
      
     
    </div>
  )
}

export default Work
