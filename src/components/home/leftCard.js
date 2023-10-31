import React from "react";
import Card from "./card";

export default function LeftCard() {
  return (
    <div className='flex flex-col '>
      {/* card1 */}
      <Card className='p-4'>
        <img src='/dev/sample.jpg' style={{ borderRadius: "4px" }} />
        <div className='mt-3'>
          <h5 className='text-lg font-bold'>Image title</h5>
          <p className='pt-1' style={{ color: "rgb(136, 146, 176)" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <input
            type='text'
            id='first_name'
            className='mt-4 bg-dark border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Placeholder'
            required
          />
        </div>
      </Card>
      {/* advertisemet card */}
      <Card className='p-4 mt-5'>
        <h5 className='text-lg font-bold'>Advertisement</h5>
        <img
          src='/dev/sample.jpg'
          className='mt-2'
          style={{ borderRadius: "4px" }}
        />
      </Card>

      {/* amazon store card */}
      <Card className='p-4 mt-5'>
        <h5 className='text-lg font-bold'>Popular</h5>
        <div className='flex gap-2 mt-2'>
          <div className=''>
            <img
              src='/dev/product.png'
              className='mt-2'
              style={{ borderRadius: "4px", width: "40px", height: "40px" }}
            />
          </div>
          <div className='flex-1 pt-1'>
            <h5 className='text-base font-bold'>consectetur amet</h5>
            <p className='text-xs' style={{ color: "rgb(136, 146, 176)" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
