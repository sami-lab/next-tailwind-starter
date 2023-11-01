"use client";
import React, { useState } from "react";
import formatDate from "@/src/utils/formatDate";
function Accordion({ channel }) {
  const { name, publishedAt, articles } = channel;
  const [isAccordionOpen, setAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className='bg-gray-100 p-4 mb-4'>
      <div className='flex items-center gap-4'>
        <h2 className='text-3xl text-light font-bold '>{name}</h2>
        <div className='w-6 h-6 mr-2 text-light'>
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
      </div>
      <p className='text-light mt-1'>{formatDate(publishedAt)}</p>
      {isAccordionOpen && (
        <div className='mt-2' style={{ borderTop: "1px solid #43464D" }}>
          {/* Description or content */}
          {articles.map((item, i) => (
            <div className='flex items-end gap-2 mt-3'>
              <p className='text-md  text-light font-bold'> {item.title} </p>
              <p className='text-sm ' style={{ color: "rgb(136, 146, 176)" }}>
                {" "}
                {item.author}{" "}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Accordion;
