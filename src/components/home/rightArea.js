import React from "react";

function PriceItem({ item, price }) {
  return (
    <div className=''>
      <div className='border border-gray-300 p-4'>
        <div className='text-lg font-semibold'>{item}</div>
        <div className='text-gray-700'>Price: {price}</div>
      </div>
    </div>
  );
}
export default function RightArea() {
  const priceData = [
    { item: "A", price: "10" },
    { item: "B", price: "20" },
    { item: "C", price: "30" },
    { item: "D", price: "40" },
    { item: "E", price: "50" },
    { item: "F", price: "60" },
    { item: "D", price: "40" },
    { item: "E", price: "50" },
    { item: "F", price: "60" },
    { item: "D", price: "40" },
    { item: "E", price: "50" },
    { item: "F", price: "60" },
    // Add more data as needed
  ];
  return (
    <div>
      <div className='grid grid-cols-3'>
        {priceData.map((item, index) => (
          <PriceItem key={index} item={item.item} price={item.price} />
        ))}
      </div>
    </div>
  );
}
