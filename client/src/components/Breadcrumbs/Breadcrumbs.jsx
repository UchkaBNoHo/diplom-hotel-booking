// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ isSingleHotel, direction, current, directionURL }) => {
  return (
    <div
      className={
        isSingleHotel
          ? `max-w-[1100px] m-auto flex items-center gap-2 mt-5 mb-8`
          : `max-w-[1300px] m-auto flex items-center gap-2 mt-5 mb-8`
      }
    >
      <Link to={directionURL} className="p-[6px] rounded-full border-[0.3px] border-gray-200 inline-block mr-5 cursor-pointer hover:shadow-md duration-150">
        <IoIosArrowRoundBack className="text-xl cursor-pointer" />
      </Link>
      <Link to={directionURL} className="text-gray-400 cursor-pointer text-[14px]">{direction}</Link>
      <LuDot className="text-lg cursor-pointer" />
      <span className="font-medium text-[14px]">{current}</span>
    </div>
  );
};

export default Breadcrumbs;
