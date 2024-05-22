// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";

const Password = () => {
  return (
    <div className="w-[60%]">
      <h1 className="text-md font-medium">Change Password</h1>
      <div className="flex flex-col gap-2 w-[50%] mt-4">
        <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
          <RiLockPasswordFill className="text-[14px] text-gray-500" />
          <input
            type="password"
            className="outline-none bg-transparent text-[14px] placeholder:italic"
            placeholder="Old password"
          />
        </div>
        <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100 mt-2">
          <RiLockPasswordFill className="text-[14px] text-gray-500" />
          <input
            type="password"
            className="outline-none bg-transparent text-[14px] placeholder:italic"
            placeholder="New password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 px-7 py-2 rounded-[24px] text-[14px] bg-black font-light text-white"
      >
        <span className="text-[14px] font-medium">Change</span>
      </button>
    </div>
  );
};

export default Password;
