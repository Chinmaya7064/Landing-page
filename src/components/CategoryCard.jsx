import React from 'react'
import { BsArrowUpRight, BsVectorPen } from 'react-icons/bs'

function CategoryCard({icons,title}) {
  return (
    <div className='category-card bg-white p-4 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#45bdc5] hover:cursor-pointer group/edit'>
      <div className='flex gap-4'>
        {icons}
        <h1 className='text-md font-semibold'>{title}</h1>
      </div>
      <div className='group-hover/edit:bg-[#45bdc5] p-3 rounded-lg'>
        <BsArrowUpRight 
          size={30} 
          style={{color: '#45bdc5'}} 
          className='arrow-icon'
        />
      </div>
    </div>
  )
}

export default CategoryCard
