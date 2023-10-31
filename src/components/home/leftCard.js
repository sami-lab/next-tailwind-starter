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
          <p className='pt-1 '>
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
    </div>
  );
}
