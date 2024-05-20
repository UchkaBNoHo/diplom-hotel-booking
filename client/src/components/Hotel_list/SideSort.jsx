/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CiWifiOn } from "react-icons/ci";
import { PiTreeLight } from "react-icons/pi";
import { PiDogThin } from "react-icons/pi";
import { PiCampfireThin } from "react-icons/pi";
import { PiTelevisionSimpleThin } from "react-icons/pi";
import { PiSnowflakeThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";
import { PiBathtubThin } from "react-icons/pi";
import { PiWavesThin } from "react-icons/pi";
import { PiFlowerTulipThin } from "react-icons/pi";
import { PiCarThin } from "react-icons/pi";
import { LiaBathSolid } from "react-icons/lia";
import { PiThermometerHotThin } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";

const SideSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    city: searchParams.get("city") || "",
    type: searchParams.get("property") || "apartment",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000,
    conveniences: [],
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleConvenience = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setQuery({
        ...query,
        conveniences: [...query.conveniences, name],
      });
    } else {
      setQuery({
        ...query,
        conveniences: query.conveniences.filter((item) => item !== name),
      });
    }
  };

  const handleReset = () => {
    setQuery({
      city: "",
      type: "apartment",
      minPrice: 0,
      maxPrice: 100000,
      conveniences: [],
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
    console.log(searchParams);
  };

  console.log(query);
  return (
    <div className="w-[30%] max-lg:w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-2xl">Filters</h1>
        <span className="text-[#8f8f8f] text-[14px]">Filter</span>
      </div>
      <div className="">
        <div className="mt-6">
          <h2 className="font-medium">Price</h2>
          <div className="flex justify-between items-center gap-5 mt-2 max-[560px]:gap-2">
            <input
              type="number"
              placeholder="$ Min"
              id="minPrice"
              name="minPrice"
              min={0}
              max={100000}
              onChange={handleChange}
              value={query.minPrice}
              className="w-[100%] border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] py-[14px] outline-none"
            />
            <input
              type="number"
              placeholder="$ Max"
              id="maxPrice"
              name="maxPrice"
              min={0}
              max={100000}
              onChange={handleChange}
              value={query.maxPrice}
              className="w-[100%] border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] py-[14px] outline-none"
            />
          </div>
        </div>
        <div className="mt-8 max-md:mt-4">
          <h2 className="font-medium">City</h2>
          <div className="mt-2">
            <input
              type="text"
              placeholder="City"
              id="city"
              name="city"
              onChange={handleChange}
              value={query.city}
              className="w-[100%] border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] py-[14px] outline-none"
            />
          </div>
        </div>
        <div className="mt-8 max-md:mt-4">
          <h2 className="font-medium">Property Type</h2>
          <div className="mt-2">
            <select
              name="type"
              id=""
              onChange={handleChange}
              className="w-[100%] border-[1px] border-[#8f8f8f] rounded-[8px] p-[10px] py-[14px] outline-none"
            >
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
              <option value="hostel">Hostel</option>
              <option value="guest">Guest House</option>
            </select>
          </div>
        </div>
        <div className="mt-8 max-md:mt-4">
          <h2 className="font-medium">Conveniences</h2>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
            <input
              type="checkbox"
              name="WiFi"
              id="WiFi"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="WiFi"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <CiWifiOn className="text-[18px] text-[#8f8f8f]" />
              <span className="">WiFi</span>
            </label>
            <input
              type="checkbox"
              name="in the woods"
              id="in the woods"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="in the woods"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <CiWifiOn className="text-[18px] text-[#8f8f8f]" />
              <span className="">in the woods</span>
            </label>
            <input
              type="checkbox"
              name="Pool"
              id="Pool"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Pool"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[1px]"
            >
              <CiWifiOn className="text-[18px] text-[#8f8f8f]" />
              <span className="">Pool</span>
            </label>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiDogThin className="text-[18px] text-[#8f8f8f]" />
              <span>Dog Friendly</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiTelevisionSimpleThin className="text-[18px] text-[#8f8f8f]" />
              <span>TV</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiEyeThin className="text-[18px] text-[#8f8f8f]" />
              <span>Mountain view</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiSnowflakeThin className="text-[18px] text-[#8f8f8f]" />
              <span>Air conditioning</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiBathtubThin className="text-[18px] text-[#8f8f8f]" />
              <span>Bath</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiWavesThin className="text-[18px] text-[#8f8f8f]" />
              <span>Lakes & Rivers</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiFlowerTulipThin className="text-[18px] text-[#8f8f8f]" />
              <span>Backyard</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiCarThin className="text-[18px] text-[#8f8f8f]" />
              <span>Free parking</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <LiaBathSolid className="text-[18px] text-[#8f8f8f]" />
              <span>Hot water</span>
            </div>
            <div
              className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              onClick={handleConvenience}
            >
              <PiThermometerHotThin className="text-[18px] text-[#8f8f8f]" />
              <span>Temperature</span>
            </div>
          </div>
        </div>
        <div
          className="mt-8 w-full bg-black rounded-[14px] text-center py-3 cursor-pointer mb-6"
          onClick={handleFilter}
        >
          <span className="text-white font-medium">APPLY</span>
        </div>
      </div>
    </div>
  );
};

export default SideSort;
