"use client";
import React, { useState } from "react";

function Accordion({ channel }) {
  const { name, publishedAt, articles } = channel;
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className='bg-gray-100 p-4 mb-4'>
      <div className='flex items-center '>
        <div className='w-6 h-6 mr-2 text-blue-500'>
          {/* Icon to toggle accordion */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='cursor-pointer'
            onClick={toggleAccordion}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p className='text-gray-700'>{publishedAt}</p>
      </div>
      {isAccordionOpen && (
        <div className='mt-2'>
          {/* Description or content */}
          <p className='text-gray-700'> lorem ispum </p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
