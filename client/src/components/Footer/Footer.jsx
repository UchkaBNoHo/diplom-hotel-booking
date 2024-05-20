/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = ({ isSingleHotel }) => {
  return (
    <section
      className={
        isSingleHotel
          ? `max-w-[1100px] m-auto flex justify-between items-center mt-20 py-5 border-t-[1px] border-gray-500`
          : `max-w-[1300px] m-auto flex justify-between items-center mt-20 py-5 border-t-[1px] border-gray-500`
      }
    >
      <div className="flex flex-col gap-2 max-[560px]:gap-1">
        <div className="">
          <h1 className="text-2xl font-medium cursor-pointer max-md:text-[20px]">
            <a href="#">BOOKLY</a>
          </h1>
        </div>
        <span className="max-[1140px]:text-[14px] max-[560px]:text-[12px]">
          © 2024 Hotel Booking, Mongolia
        </span>
      </div>
      <div className="flex gap-5 max-[1140px]:gap-3">
        <a href="https://www.facebook.com/profile.php?id=100073152549652">
          <FaFacebook className="text-2xl cursor-pointer max-[1140px]:text-[18px]" />
        </a>
        <a href="https://github.com/UchkaBNoHo">
          <FaGithub className="text-2xl cursor-pointer max-[1140px]:text-[18px]" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
