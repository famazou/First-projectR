import React from 'react'
import me from '../assets/me.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
<div className='mt-4 md:mt-8 text-left flex '>
  <div className='my-auto mx-6'>
    <h2 className='text-4xl font-bold mb-4 primary-color'>About me</h2>
    <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit.
         Eaque neque odit porro eligendi 
         amet impedit hic, sunt quasi.
          Error doloribus facilis adipisci 
          veritatis. Non, quidem quaerat! 
          Atque sapiente odit repudiandae.
          </p>
  </div>
</div>
<img className='mx-auto rounded-3xl py-8 md:py-0' src={me} alt="" width={300} height={300} />
      </div>
    </div>
  )
}

export default About;
