import React from 'react';
import heroImg from '../assets/heroImg1.png';
import { AiOutlineSearch } from 'react-icons/ai'; 
import '../App.css'

const Hero = () => {
  return (
    <div className='w-full bg-white py-20'>
        <div className='md:max-w-[1170px] m-auto grid md:grid-cols-2 max-w-[400px]'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#45bdc5] font-medium'>START TO SUCCESS</p>
                <h1 className='md:leading-[55px] py-2 md:text-5xl text-5xl font-semibold'>Access To <span className='text-[#45bdc5]'>5000+</span> Courses from <span className='text-[#45bdc5]'>3000</span> Instructors & Institutions</h1>
                <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                <form className='max-w-[600px] p-4 shadow-md rounded-md flex justify-between'>
                    <input 
                    className='bg-white'
                    type="text" 
                    placeholder='What do want to learn ? ' />
                    <button>
                      <AiOutlineSearch size={20} className='icon' style={{color: '#000'}}/>
                    </button>
                </form>
            </div>
            <img className='sm:order-last order-first h-[400px]  md:mx-28' src={heroImg} />

        </div>
    </div>
  )
}

export default Hero
