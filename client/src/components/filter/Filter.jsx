/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RiHotelFill } from "react-icons/ri";

const Filter = () => {
  const [cityValue, setCityValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  return (
    <section className="max-w-[1300px] m-auto bg-white rounded-[24px] mt-[-100px] px-6 py-8 pb-10 bshadow">
      <h1 className="text-[20px] font-medium">Find a Hotel</h1>
      <div className="flex justify-between mt-4">
        <fieldset className="border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] w-[40%]">
          <legend className="text-[14px] font-light">Enter Destination</legend>
          <input
            type="text"
            id="fname"
            name="fname"
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
            placeholder="City"
            className="text-black placeholder:text-[15px] w-[100%] placeholder:font-light outline-none"
          />
        </fieldset>
        <fieldset className="border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] w-[28%]">
          <legend className="text-[14px] font-light">Min Price</legend>
          <input
            type="number"
            id="lname"
            name="lname"
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}
            placeholder="Min Price"
            className="text-black placeholder:text-[15px] w-[100%] placeholder:font-light outline-none"
          />
        </fieldset>
        <fieldset className="border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] w-[28%]">
          <legend className="text-[14px] font-light">Max Price</legend>
          <input
            type="number"
            id="lname"
            name="lname"
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
            placeholder="Max Price"
            className="text-black placeholder:text-[15px] w-[100%] placeholder:font-light outline-none"
          />
        </fieldset>
      </div>
      <div className="flex justify-end mt-6">
        <div className="flex items-center gap-3 p-4 px-4 rounded-[8px] bg-[#8DD3BB] duration-300 cursor-pointer hover:bg-[#a3e1cb]">
          <RiHotelFill className="text-[20px]" />
          <h3 className="text-[14px] font-medium">Show Places</h3>
        </div>
      </div>
    </section>
  );
};

export default Filter;
