import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { courses } from '../data/Courses';

function Courses() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-[#E9F8F3B2] w-full py-24'>
      <div className='md:max-w-[1170px] m-auto max-w-[400px]'>
      <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#45bdc5]'>Courses</span></h1>
      <p className='text-[#6D737A] mb-2'>Various versions have evolved over the years, sometimes by accident.</p>
        <Slider {...settings}>
          {courses.map(course=><Card course={course} />) }
        </Slider>
      </div>
    </div>
  )
}

export default Courses
