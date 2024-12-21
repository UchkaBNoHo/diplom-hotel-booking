// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { FaCity } from "react-icons/fa";
import { PiCityFill } from "react-icons/pi";
import { MdPriceChange } from "react-icons/md";
import { PiSubtitlesFill } from "react-icons/pi";
import { MdHolidayVillage } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import instance from "../../../../../lib/axios";
import UploadWidget from "../../../uploadWidget/UploadWidget";

const AddHotel = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState({
    name: "",
    type: "apartment",
    city: 0,
    pricePerNight: 0,
    country: "",
    address: "",
    latitude: "",
    longitude: "",
    description: "",
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

  const handleDescriptionChange = (value) => {
    setQuery({
      ...query,
      description: value,
    });
  };
  // console.log(query);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    if (
      !query.name ||
      !query.type ||
      !query.city ||
      !query.pricePerNight ||
      !query.country ||
      !query.address ||
      !query.latitude ||
      !query.longitude ||
      !query.description ||
      !query.conveniences
    ) {
      toast.error("All fields are required");
      return;
    }

    if (images.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }

    if (query.pricePerNight < 0) {
      toast.error("Price per night cannot be negative");
      return;
    }

    if (query.latitude < -90 || query.latitude > 90) {
      toast.error("Latitude must be between -90 and 90");
      return;
    }

    if (query.longitude < -180 || query.longitude > 180) {
      toast.error("Longitude must be between -180 and 180");
      return;
    }
    try {
      const res = await instance.post(
        "http://localhost:5000/api/hotels/",
        {
          name: query.name,
          city: query.city,
          type: query.type,
          pricePerNight: query.pricePerNight,
          country: query.country,
          address: query.address,
          latitude: query.latitude,
          longitude: query.longitude,
          description: query.description,
          conveniences: query.conveniences,
          imageUrls: images,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(res);
      if (res.status === 200) {
        toast.success("Hotel added");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  // console.log(images);
  return (
    <div className="w-[60%] pb-16">
      <Toaster position="top-center" />
      <h1 className="text-xl font-medium">Add hotel</h1>
      <div className="w-full mt-10 mb-6">
        <h2 className="font-medium">Upload File</h2>
        <div className="border-[1px] border-gray-400 rounded-[8px] w-full h-[240px] mt-3 border-dashed flex justify-center items-center flex-col">
          <div className="flex flex-wrap justify-around mb-4">
            {images.map((image, index) => {
              return (
                <img
                  src={image}
                  key={index}
                  alt=""
                  className="w-[20%] h-[125px] object-cover rounded-[12px]"
                />
              );
            })}
          </div>
          <UploadWidget
            uwConfig={{
              cloudName: "dopjmx6no",
              uploadPreset: "hotel-booking",
              multiple: true,
              folder: "hotels",
            }}
            setState={setImages}
          />
        </div>
      </div>
      <h1 className="font-medium mt-6">Main Details</h1>
      <div className="mt-6 mb-9">
        <div className="flex items-center justify-between">
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="name" className="text-[14px]">
              Name
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <PiSubtitlesFill className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="name"
                name="name"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Name"
                // defaultValue={user.userName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="pricePerNight" className="text-[14px]">
              Price Per Night
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <MdPriceChange className="text-[14px] text-gray-500" />
              <input
                type="number"
                id="pricePerNight"
                name="pricePerNight"
                className="outline-none bg-transparent text-[14px] placeholder:italic w-full"
                placeholder="Price Per Night"
                // defaultValue={user.userName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="city" className="text-[14px]">
              City
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <PiCityFill className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="city"
                name="city"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder=" City"
                // defaultValue={user.userName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="country" className="text-[14px]">
              Country
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <FaCity className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="country"
                name="country"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Country"
                // defaultValue={user.userName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="type" className="text-[14px]">
              Type
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100 w-full">
              <MdHolidayVillage className="text-[14px] text-gray-500" />
              <select
                name="type"
                id=""
                onChange={handleChange}
                className="outline-none bg-transparent text-[14px] placeholder:italic"
              >
                <option value="" disabled>
                  any
                </option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
                <option value="hostel">Hostel</option>
                <option value="guest">Guest House</option>
              </select>
            </div>
          </div>
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="address" className="text-[14px]">
              Address
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <IoLocation className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="address"
                name="address"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Address"
                // defaultValue={user.userName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="latitude" className="text-[14px]">
              Latitude
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <input
                type="text"
                id="latitude"
                name="latitude"
                className="outline-none bg-transparent text-[14px] placeholder:italic w-full"
                placeholder="Latitude"
                // defaultValue={user.userName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-[49%] flex flex-col gap-2">
            <label htmlFor="longitude" className="text-[14px]">
              Longitude
            </label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <input
                type="text"
                id="longitude"
                name="longitude"
                className="outline-none bg-transparent text-[14px] placeholder:italic w-[100%]"
                placeholder="Longitude"
                // defaultValue={user.userName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <label htmlFor="description" className="text-[14px]">
            Description
          </label>
          <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
            <ReactQuill
              theme="snow"
              className="outline-none bg-transparent text-[14px] placeholder:italic w-[100%]"
              placeholder="Description"
              // defaultValue={user.userName}
              onChange={handleDescriptionChange}
              value={query.description}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <label htmlFor="description" className="text-[14px]">
            Convenience
          </label>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
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
              <span className="">in the woods</span>
            </label>
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
              <span className="">WiFi</span>
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
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Pool</span>
            </label>
            <input
              type="checkbox"
              name="Dog friendly"
              id="Dog friendly"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Dog friendly"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Dog friendly</span>
            </label>
            <input
              type="checkbox"
              name="Hot tubes"
              id="Hot tubes"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Hot tubes"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Hot tubes</span>
            </label>
            <input
              type="checkbox"
              name="Free breakfast"
              id="Free breakfast"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Free breakfast"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Free breakfast</span>
            </label>
            <input
              type="checkbox"
              name="Options for pillow"
              id="Options for pillow"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Options for pillow"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Options for pillow</span>
            </label>
            <input
              type="checkbox"
              name="Free parking"
              id="Free parking"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Free parking"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Free parking</span>
            </label>
            <input
              type="checkbox"
              name="Gym or fitness"
              id="Gym or fitness"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Gym or fitness"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Gym or fitness</span>
            </label>
            <input
              type="checkbox"
              name="Powerbank for the Road"
              id="Powerbank for the Road"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Powerbank for the Road"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Powerbank for the Road</span>
            </label>
            <input
              type="checkbox"
              name="Rollaway Tent"
              id="Rollaway Tent"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Rollaway Tent"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Rollaway Tent</span>
            </label>
            <input
              type="checkbox"
              name="Kid equipment"
              id="Kid equipment"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Kid equipment"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Kid equipment</span>
            </label>
            <input
              type="checkbox"
              name="Car Service"
              id="Car Service"
              onChange={handleConvenience}
              className="hidden"
            />
            <label
              htmlFor="Car Service"
              className="flex justify-center items-center gap-2 px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer border-[0.6px]"
            >
              <span className="">Car Service</span>
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="px-7 py-2 rounded-[24px] text-[14px] bg-black font-light text-white"
        onClick={handleSubmit}
      >
        <span className="text-[14px] font-medium">Update</span>
      </button>
    </div>
  );
};

export default AddHotel;
