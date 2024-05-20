// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const HotelCard = ({ img, title, address, price, listCard }) => {
  return (
    <div
      className={
        listCard
          ? "w-[32%] max-[1000px]:w-[32%] max-md:w-[48%] max-[560px]:w-[100%]"
          : `w-[24%] max-[1000px]:w-[32%] max-md:w-[48%] max-[560px]:w-[100%]`
      }
    >
      <div className="w-[100%] aspect-[3/2] bg-red-900 rounded-[12px] overflow-hidden">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <h2 className="text-[20px] font-medium mt-3 max-xl:text-[18px] max-[820px]:text-[17px]">
        {title}
      </h2>
      <div className="flex gap-2 mt-1 items-center">
        <IoLocationOutline className="text-[20px] text-gray-600" />
        <span className="text-[15px] text-gray-600 font-normal max-xl:text-[13px] max-[820px]:text-[12px]">
          {address}
        </span>
      </div>
      <div className="flex gap-0 items-end mt-2">
        <h3 className="text-[21px] font-medium max-xl:text-[18px] max-[820px]:text-[17px]">
          $ {price}
        </h3>
        <span className=" text-gray-500 text-[13px]">/night</span>
      </div>
    </div>
  );
};

export default HotelCard;
