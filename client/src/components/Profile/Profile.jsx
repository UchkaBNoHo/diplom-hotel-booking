// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import Sidebar from "./sidebar/Sidebar";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import EditProfile from "./per_components/edit_profile/EditProfile";
import Password from "./per_components/password/Password";
import { LiaHotelSolid } from "react-icons/lia";
import AddHotel from "./per_components/add_hotel/AddHotel";
import MyOrders from "./per_components/my_orders/MyOrders";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  const [searchParams] = useSearchParams();
  const [component, setComponent] = useState(
    searchParams.get("text") || "editProfile"
  );
  return (
    <main className="max-w-[1100px] m-auto">
      <Navbar isSingleHotel={true} />
      <div className="flex justify-between">
        <section className="w-[20%] border-r-[0.4px] border-gray-200 pr-6">
          <div className="">
            <div className="">
              <h2 className="text-[16px] px-4 py-3 border-b-[0.4px] border-gray-200 mb-4">
                Dashboard
              </h2>
            </div>
            <div
              className={
                component === "addHotel"
                  ? `bg-gray-100 rounded-[8px] flex items-center gap-2 px-4 py-3 hover:bg-gray-100 hover:rounded-[8px] cursor-pointer`
                  : `flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-[8px] cursor-pointer`
              }
              onClick={() => setComponent("addHotel")}
            >
              <LiaHotelSolid className="text-[15px]" />
              <h3 className="text-[14px]">Add Hotel</h3>
            </div>
            <div
              className={
                component === "myOrders"
                  ? `bg-gray-100 rounded-[8px] flex items-center gap-2 px-4 py-3 hover:bg-gray-100 hover:rounded-[8px] cursor-pointer`
                  : `flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-[8px] cursor-pointer`
              }
              onClick={() => setComponent("myOrders")}
            >
              <LiaHotelSolid className="text-[15px]" />
              <h3 className="text-[14px]">My Orders</h3>
            </div>
          </div>
          <div className="">
            <div className="">
              <h2 className="text-[16px] px-4 py-3 border-b-[0.4px] border-gray-200 mb-4 mt-8">
                Settings
              </h2>
            </div>
            <div
              className={
                component === "editProfile"
                  ? `bg-gray-100 rounded-[8px] flex items-center gap-2 px-4 py-3 hover:bg-gray-100 hover:rounded-[8px] cursor-pointer mb-2`
                  : `flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-[8px] cursor-pointer mb-2`
              }
              onClick={() => setComponent("editProfile")}
            >
              <CgProfile className="text-[15px]" />
              <h3 className="text-[14px]">Edit Profile</h3>
            </div>
            <div
              className={
                component === "password"
                  ? `bg-gray-100 rounded-[8px] flex items-center gap-2 px-4 py-3 hover:bg-gray-100 hover:rounded-[8px] cursor-pointer`
                  : `flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-[8px] cursor-pointer`
              }
              onClick={() => setComponent("password")}
            >
              <RiLockPasswordLine className="text-[15px]" />
              <h3 className="text-[14px]">Change Password</h3>
            </div>
          </div>
        </section>
        {component === "editProfile" && <EditProfile />}
        {component === "password" && <Password />}
        {component === "addHotel" && <AddHotel />}
        {component === "myOrders" && <MyOrders />}
      </div>
    </main>
  );
};

export default Profile;
