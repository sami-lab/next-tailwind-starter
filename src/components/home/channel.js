"use client";
import React, { useState } from "react";
import formatDate from "@/src/utils/formatDate";
import Card from "./card";
function Accordion({ index, channel, allChannels, setChannels }) {
  const { name, publishedAt, articles } = channel;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-100 p-4 mb-4'>
      <div className='flex items-center gap-4'>
        <h2 className='text-3xl text-light font-bold '>{name}</h2>
        <div className='w-6 h-6 mr-2 text-light relative inline-block'>
          {/* Icon to toggle accordion */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='cursor-pointer'
            onClick={toggleMenu}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
          {isMenuOpen && (
            <div className='absolute left-0 mt-2 ' style={{ zIndex: 100 }}>
              <Card className='p-2'>
                {/* Menu items */}
                <ul>
                  {allChannels.map((item, i) => (
                    <li
                      className='p-2 cursor-pointer'
                      style={{ minWidth: "200px", width: "100%" }}
                      key={i}
                      onClick={() => {
                        setChannels((c) => [
                          ...c.map((x, ind) => {
                            if (ind === index) return item;
                            return x;
                          }),
                        ]);
                        toggleMenu();
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </div>
      </div>
      <p className='text-light mt-1'>{formatDate(publishedAt)}</p>

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
    </div>
  );
}

export default Accordion;
