/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import england from '../../../public/england.jpg'

const Navbar = () => {
  return (
    <section className="max-w-[1300px] m-auto py-3 flex justify-between items-center">
      <div className="">
        <h1 className="text-2xl font-medium cursor-pointer">
          <a href="#">BOOKLY</a>
        </h1>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex gap-2 items-center mr-3 cursor-pointer hover:bg-gray-100 duration-150 px-3 py-2 rounded-[32px]">
            <h3>USD</h3>
            <img src={england} alt="" className="w-5 h-5"/>
        </div>
        <div className="pr-3 h-fit border-r-[1px] border-black flex gap-2 items-center">
          <MdOutlineFavorite className="text-xl cursor-pointer" />
          <h3 className="text-[13px] font-medium cursor-pointer">Favourites</h3>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex gap-3 items-center border-1 border px-2 py-[6px] rounded-[32px] hover:shadow-md duration-150"
          >
            <IoIosMenu className="text-2xl cursor-pointer" />
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Add restaurant</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
