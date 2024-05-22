/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RiHotelFill } from "react-icons/ri";
import { MdHotelClass } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { Link } from "react-router-dom";

const Filter = () => {
  const [query, setQuery] = useState({
    city: "",
    minPrice: 0,
    maxPrice: 100000,
  });

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative z-10 max-w-[1120px] m-auto bg-white rounded-[24px] mt-[-100px] px-6 py-4 pb-5 bshadow max-xl:w-[90%] max-md:w-full">
      <div className="flex gap-2 items-center">
        <MdHotelClass className="text-[24px] max-md:text-[20px]" />
        <h1 className="text-[20px] font-medium max-md:text-[17px]">Hotel</h1>
      </div>
      <div className="flex justify-between mt-4 max-[560px]:flex-col max-[560px]:gap-2">
        <fieldset className="border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] w-[40%] max-[560px]:w-[100%]">
          <legend className="text-[14px] font-light">Enter Destination</legend>
          <div className="flex gap-2 items-center">
            <RiHotelFill className="text-[20px] max-[560px]:text-[18px]" />
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              placeholder="City"
              className="text-black placeholder:text-[15px] w-[100%] placeholder:font-light outline-none"
            />
          </div>
        </fieldset>
        <fieldset className="border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] w-[28%] max-[560px]:w-[100%]">
          <legend className="text-[14px] font-light">Min Price</legend>
          <div className="flex gap-2 items-center">
            <ImPriceTags className="text-[20px] max-[560px]:text-[18px]" />
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              min={0}
              max={100000}
              onChange={handleChange}
              placeholder="Min Price"
              className="text-black placeholder:text-[15px] w-[100%] placeholder:font-light outline-none"
            />
          </div>
        </fieldset>
        <fieldset className="border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] w-[28%] max-[560px]:w-[100%]">
          <legend className="text-[14px] font-light">Max Price</legend>
          <div className="flex gap-2 items-center">
            <ImPriceTags className="text-[20px] max-[560px]:text-[18px]" />
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              min={0}
              max={100000}
              onChange={handleChange}
              placeholder="Max Price"
              className="text-black placeholder:text-[15px] w-[100%] placeholder:font-light outline-none"
            />
          </div>
        </fieldset>
      </div>
      <div className="flex justify-end mt-6">
        <Link
          to={`/hotel_list?city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="flex items-center gap-3 p-4 px-4 rounded-[8px] duration-300 cursor-pointer bg-black max-[560px]:px-3 py-3"
        >
          <RiHotelFill className="text-[20px] text-white max-[560px]:text-[18px]" />
          <h3 className="text-[14px] font-medium text-white max-[560px]:text-[12px]">Show Places</h3>
        </Link>
      </div>
    </section>
  );
};

export default Filter;
