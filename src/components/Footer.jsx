import React from 'react';
import logo from '../assets/logo.png'
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-full bg-white py-20'>
        <div className='md:max-w-[1170px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-8 max-w-[400px]'>
            <div className='col-span-2'>
                <img src={logo} className='h-[50px]'/>
                <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                <h3 className='py-2 text-[#6D737A]'>Call : +444 897 567</h3>
                <h3 className='py-2 text-[#6D737A]'>Bhubaneswar, Odisha</h3>
                <h3 className='py-2 text-[#6D737A]'>Email : practice@gmail.com</h3>
                <div className='flex gap-4 py-4'>
                    <div className='p-4 bg-[#e9f4f8] rounded-xl'><FaFacebookF size={25} style={{color: '#45bdc5'}} /></div>
                    {/* <div className='p-4 bg-[#e9f4f8] rounded-xl'><FaDribbble size={25} style={{color: '#45bdc5'}} /></div> */}
                    <div className='p-4 bg-[#e9f4f8] rounded-xl'><FaLinkedinIn size={25} style={{color: '#45bdc5'}} /></div>
                    <div className='p-4 bg-[#e9f4f8] rounded-xl'><FaInstagram size={25} style={{color: '#45bdc5'}} /></div>
                    <div className='p-4 bg-[#e9f4f8] rounded-xl'><FaBehance size={25} style={{color: '#45bdc5'}} /></div>
                </div>
            </div>

            <div>
                <h3 className='text-xl font-bold '>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2 cursor-pointer'>Home</li>
                    <li className='py-2 cursor-pointer'>About</li>
                    <li className='py-2 cursor-pointer'>Course</li>
                    <li className='py-2 cursor-pointer'>Blog</li>
                    <li className='py-2 cursor-pointer'>Contact</li>   
                </ul>
            </div>

            <div>
                <h3 className='text-xl font-bold '>Category</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2 cursor-pointer'>Design</li>
                    <li className='py-2 cursor-pointer'>Development</li>
                    <li className='py-2 cursor-pointer'>Marketing</li>
                    <li className='py-2 cursor-pointer'>Business</li>
                    <li className='py-2 cursor-pointer'>Lifestyle</li>   
                    <li className='py-2 cursor-pointer'>Photography</li>   
                    <li className='py-2 cursor-pointer'>Music</li>   
                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-xl font-bold '>Subscribe</h3>
                <h3 className='py-2 text-[#6D737A]'>Subscribe to the course that will make you confident that you are going to learn</h3>
                <form className='py-4'>
                    <input className='bg-[#F2F3F4] p-4 w-full rounded' placeholder='Email here' />
                    <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#45bdc5] text-white font-medium'>Subscribe Now</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Footer
