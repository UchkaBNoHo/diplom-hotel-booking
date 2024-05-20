// eslint-disable-next-line no-unused-vars
import React from "react";
import hotel3 from "/hotel-3.jpg";
import hotel4 from "/hotel-4.jpg";
import hotel5 from "/hotel-5.jpg";
import hotel6 from "/hotel-6.jpg";
import hotel7 from "/hotel-7.jpg";

const Images = () => {
  return (
    <div className="w-[68%] max-[845px]:w-full">
      <div className="w-full aspect-[6/3] bg-red-700 rounded-[16px] overflow-hidden mb-2">
        <img src={hotel4} alt="" className="w-full h-full" />
      </div>
      <div className="w-full flex justify-between gap-1">
        <div className="w-[24%] aspect-[2/1] bg-blue-500 rounded-[12px] overflow-hidden">
          <img src={hotel5} alt="" className="w-full h-full" />
        </div>
        <div className="w-[24%] aspect-[2/1] bg-green-500 rounded-[12px] overflow-hidden">
          <img src={hotel6} alt="" className="w-full h-full" />
        </div>
        <div className="w-[24%] aspect-[2/1] bg-yellow-500 rounded-[12px] overflow-hidden">
          <img src={hotel7} alt="" className="w-full h-full" />
        </div>
        <div className="w-[24%] aspect-[2/1] bg-pink-500 rounded-[12px] overflow-hidden">
          <img src={hotel3} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Images;
