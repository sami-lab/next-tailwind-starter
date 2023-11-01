"use client";
import React from "react";
import Card from "./card";

function PriceItem({ index, item, price }) {
  return (
    <div className=''>
      <div
        className='flex justify-between gap-1 p-4'
        style={{ borderLeft: index % 3 === 0 ? 0 : "1px solid #43464D" }}
      >
        <div className='text-sm font-semibold'>{item}</div>
        <div className='text-sm text-gray-700'>{price}</div>
      </div>
    </div>
  );
}
export default function RightArea() {
  const priceData = [
    { item: "Crude Oil", price: "10" },
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

  const callToActionButton = () => {};
  return (
    <div>
      <Card>
        <div className='grid p-5'>
          <h5 className='text-2xl font-bold text-light text-center'>Prices</h5>
        </div>

        <div
          className='grid grid-cols-3 '
          //style={{ borderTop: "1px solid #43464D" }}
        >
          {priceData.map((item, index) => (
            <PriceItem
              key={index}
              index={index}
              item={item.item}
              price={item.price}
            />
          ))}
        </div>
      </Card>

      <div className='mt-5 cursor-pointer' onClick={callToActionButton}>
        <Card>
          <img
            src='/dev/call-to-action.jpg'
            style={{ width: "100%", height: "200px", borderRadius: "inherit" }}
          />
        </Card>
      </div>
    </div>
  );
}
