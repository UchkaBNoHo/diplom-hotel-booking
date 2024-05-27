/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import england from "/england.jpg";
import { useNavigate } from "react-router-dom";
import instance from "../../../lib/axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { LiaHotelSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { IoLogIn } from "react-icons/io5";
import Cookies from "js-cookie";

const Navbar = ({ isSingleHotel }) => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const token = Cookies.get("token");

  // console.log(currentUser);

  // console.log(currentUser);

  const handleLogout = async () => {
    try {
      const res = await instance.post("http://localhost:5000/api/auth/logout");
      console.log(res);
      if (res.status === 200) {
        updateUser(null);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav
      className={
        isSingleHotel
          ? `max-w-[1100px] m-auto py-3 flex justify-between items-center`
          : `max-w-[1300px] m-auto py-3 flex justify-between items-center`
      }
    >
      <div className="">
        <h1 className="text-2xl font-medium cursor-pointer max-md:text-[20px]">
          <a href="#">BOOKLY</a>
        </h1>
      </div>
      <div className="flex gap-8 items-center">
        {!token && (
          <div className="">
            <Link
              to="/login"
              className="px-3 py-2 rounded-[24px] text-[14px] mr-4 cursor-pointer"
            >
              login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 rounded-[24px] bg-black text-white text-[14px]  cursor-pointer"
            >
              register
            </Link>
          </div>
        )}
        {token && (
          <div className="relative z-10 flex items-center gap-5">
            <div className="pr-3 h-fit border-r-[1px] border-black flex gap-2 items-center max-[560px]:hidden">
              <MdOutlineFavorite className="text-xl cursor-pointer" />
              <h3 className="text-[13px] font-medium cursor-pointer">
                Favourites
              </h3>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex gap-3 items-center border-1 border px-[10px] py-[6px] rounded-[32px] hover:shadow-md duration-150"
              >
                <IoIosMenu className="text-2xl cursor-pointer" />
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div className="px-4 py-2 h-fit flex gap-3 items-center hover:bg-gray-100 hover:rounded-xl cursor-pointer">
                  <RxDashboard className="text-[16px] cursor-pointer" />
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <Link
                  to="/profile"
                  className="px-4 py-2 h-fit flex gap-3 items-center hover:bg-gray-100 hover:rounded-xl cursor-pointer"
                >
                  <CgProfile className="text-[16px] cursor-pointer" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/profile"
                  className="px-4 py-2 h-fit flex gap-3 items-center hover:bg-gray-100 hover:rounded-xl cursor-pointer"
                >
                  <LiaHotelSolid className="text-[16px] cursor-pointer" />
                  <span>Add Hotel</span>
                </Link>
                <Link
                  to="/favourites"
                  className="pr-3 h-fit flex gap-2 items-center min-[561px]:hidden hover:bg-gray-100 hover:rounded-xl cursor-pointer"
                >
                  <MdOutlineFavorite className="text-[16px] cursor-pointer" />
                  <span>Favourites</span>
                </Link>
                <div
                  className="px-4 py-2 h-fit flex gap-3 items-center hover:bg-gray-100 hover:rounded-xl cursor-pointer"
                  onClick={handleLogout}
                >
                  <CiLogout className="text-[16px] cursor-pointer" />
                  <span>Logout</span>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
