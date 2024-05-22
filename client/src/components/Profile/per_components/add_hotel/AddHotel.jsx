// eslint-disable-next-line no-unused-vars
import React from "react";
import { Toaster, toast } from "sonner";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { LiaCitySolid } from "react-icons/lia";

const AddHotel = () => {
  return (
    <div className="w-[60%]">
      <Toaster position="top-center" />
      <h1 className="text-xl font-medium">Add hotel</h1>
      <div className="w-full">
        <h2>Upload File</h2>
        <div className="border-[1px] border-gray-400 rounded-[8px] w-full h-[240px] mt-3 border-dashed flex justify-center items-center">
          <span className="text-[14px] px-5 py-2 bg-black rounded-[24px] text-white cursor-pointer">
            Browse File
          </span>
        </div>
      </div>
      <h1 className="text-xl font-medium mt-6">Main Details</h1>
      <div className="mt-6 mb-16">
        <div className="flex items-center justify-between">
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <MdOutlineSubtitles className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="name"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Name"
                // defaultValue={user.userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="pricePerNight">Price Per Night</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <MdOutlinePriceChange className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="pricePerNight"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Price Per Night"
                // defaultValue={user.userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[31%] flex flex-col gap-2">
            <label htmlFor="city">City</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <LiaCitySolid className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="city"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="City"
                // defaultValue={user.userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[31%] flex flex-col gap-2">
            <label htmlFor="country">Country</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <MdOutlineSubtitles className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="country"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Country"
                // defaultValue={user.userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[31%] flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <select
                name="type"
                id=""
                // onChange={handleChange}
                className="outline-none bg-transparent text-[14px] placeholder:italic"
              >
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
                <option value="hostel">Hostel</option>
                <option value="guest">Guest House</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <MdOutlineSubtitles className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="name"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Name"
                // defaultValue={user.userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="pricePerNight">Price Per Night</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <MdOutlineSubtitles className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="pricePerNight"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Price Per Night"
                // defaultValue={user.userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
