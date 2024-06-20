import React from 'react';
// import blogImg1 from '../assets/blogImg1.png'
import StartRating from './StartRating';

function Card({course}) {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-md mr-2'>
        <img src={course.linkImg} 
        className='h-40 w-full object-cover'
        />

        <div className='p-5 border border-b'>
          <h1 className='py-2 truncate'>{course.title}</h1>
          <StartRating rating={course.rating} />
        </div>
        <h3 className='p-5 text-xl'>{course.price}</h3>
    </div>
    
  )
}

export default Card
