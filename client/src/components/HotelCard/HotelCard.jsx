// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { IoMdHeart } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
// import instance from "../../../lib/axios";
import Cookies from "js-cookie";

const HotelCard = ({ hotel, listCard }) => {
  // const [isLoved, setIsLoved] = useState(false);
  // const hotelId = "664702286c6c091919bfe5d0";
  const user = JSON.parse(localStorage.getItem("user"));
  const token = Cookies.get("token");

  // useEffect(() => {
  //   if (user?.lovedHotels.includes(hotel?._id)) {
  //     setIsLoved(true);
  //   }
  // }, [hotel?._id, user?.lovedHotels]);
  // const HandleLoved = async () => {
  //   setIsLoved(!isLoved);

  //   try {
  //     const res = await instance.post(
  //       `http://localhost:5000/api/users/${hotel?._id}`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(res);
  //     toast.success(res.data.message);
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || "Failed to add to favourites"
  //     );
  //   }
  // };
  return (
    <div
      className={
        listCard
          ? "w-[32%] max-[1000px]:w-[32%] max-md:w-[48%] max-[560px]:w-[100%]"
          : `w-[24%] max-[1000px]:w-[32%] max-md:w-[48%] max-[560px]:w-[100%]`
      }
    >
      <Toaster position="top-center" />
      <div className="relative z-1 w-[100%] aspect-[3/2] bg-red-900 rounded-[12px] overflow-hidden">
        <Link to={`/single_hotel/${hotel?._id}`}>
          <img
            src={hotel?.imageUrls[0]}
            alt=""
            className="w-full h-full object-cover hover:scale-105 duration-300"
          />
        </Link>
        {/* {!isLoved && (
          <IoMdHeartEmpty
            className="text-2xl cursor-pointer absolute top-3 right-3 hover:text-[26px] duration-50 hover:right-[11px] hover:top-[11px]"
            onClick={HandleLoved}
          />
        )}
        {isLoved && (
          <IoMdHeart
            className="text-red-500 text-2xl cursor-pointer absolute top-3 right-3 hover:text-[26px] duration-50 hover:right-[11px] hover:top-[11px]"
            onClick={HandleLoved}
          />
        )} */}
      </div>
      <Link to={`/single_hotel/${hotel?._id}`}>
        <h2 className="text-[20px] font-medium mt-3 max-xl:text-[18px] max-[820px]:text-[17px] hover:text-gray-600">
          {hotel?.name}
        </h2>
      </Link>
      <div className="flex gap-2 mt-1 items-center">
        <IoLocationOutline className="text-[20px] text-gray-600" />
        <span className="text-[15px] text-gray-600 font-normal max-xl:text-[13px] max-[820px]:text-[12px]">
          {hotel?.address}
        </span>
      </div>
      <div className="flex gap-0 items-end mt-2">
        <h3 className="text-[21px] font-medium max-xl:text-[18px] max-[820px]:text-[17px]">
          $ {hotel?.pricePerNight}
        </h3>
        <span className=" text-gray-500 text-[13px]">/night</span>
      </div>
    </div>
  );
};

export default HotelCard;
