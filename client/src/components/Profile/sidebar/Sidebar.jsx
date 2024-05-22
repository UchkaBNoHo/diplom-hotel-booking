// eslint-disable-next-line no-unused-vars
import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <section className="w-[20%] border-r-[0.4px] border-gray-200 pr-6">
      <div className="">
        <div className="">
          <h2 className="text-[16px] px-4 py-3 border-b-[0.4px] border-gray-200 mb-4">
            Dashboard
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <h3></h3>
        </div>
      </div>
      <div className="">
        <div className="">
          <h2 className="text-[16px] px-4 py-3 border-b-[0.4px] border-gray-200 mb-4">
            Settings
          </h2>
        </div>
        <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-[8px] cursor-pointer">
          <CgProfile className="text-[15px]" />
          <h3 className="text-[14px]">Edit Profile</h3>
        </div>
        <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-[8px] cursor-pointer">
          <RiLockPasswordLine className="text-[15px]" />
          <h3 className="text-[14px]">Change Password</h3>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
