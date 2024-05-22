// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import image from "/hotel-4.jpg";
import { MdAlternateEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import instance from "../../../../../lib/axios";
import { Toaster, toast } from "sonner";
import UploadWidget from "../../../uploadWidget/UploadWidget";

const EditProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { currentUser, updateUser } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");

  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState(currentUser?.profilePicture);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(currentUser);

    try {
      const res = await instance.put(
        `http://localhost:5000/api/users/${user._id}`,
        {
          email: email || user.email,
          userName: userName || user.userName,
          bio: bio || user.bio,
          profilePicture: avatar || user.avatar,
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      console.log(res);

      updateUser(res.data);
      setLoading(false);

      toast.success("Profile updated");

      //   Navigate("/");
    } catch (err) {
      setError(err.response?.data?.message);
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[60%]">
      <Toaster position="top-center" />
      <h1 className="text-xl font-medium">Edit Profile</h1>
      <div className="mt-6 p-4 rounded-[20px] bg-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] rounded-full bg-slate-300 overflow-hidden">
            <img
              src={avatar || image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className=""></div>
            <h2 className="text-lg font-medium">{currentUser.userName}</h2>
            <div className="flex items-center gap-1">
              <MdAlternateEmail className="text-[14px] text-gray-500" />
              <p className="text-[14px] text-gray-500 font-light">
                {currentUser.email}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <UploadWidget
            uwConfig={{
              cloudName: "dopjmx6no",
              uploadPreset: "hotel-booking",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setAvatar={setAvatar}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 w-[48%]">
            <label htmlFor="username">Username</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <IoPerson className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="username"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Username"
                defaultValue={user.userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[48%]">
            <label htmlFor="username">Email</label>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
              <MdEmail className="text-[14px] text-gray-500" />
              <input
                type="text"
                id="username"
                className="outline-none bg-transparent text-[14px] placeholder:italic"
                placeholder="Email"
                defaultValue={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full mt-6">
          <label htmlFor="username">Bio</label>
          <div className="flex gap-2 items-center px-4 py-3 rounded-[8px] bg-gray-100">
            <textarea
              type="text"
              id="username"
              className="outline-none bg-transparent text-[14px] w-full h-[140px] placeholder:italic"
              placeholder="Bio"
              defaultValue={user.bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 px-7 py-2 rounded-[24px] text-[14px] bg-black font-light text-white"
        >
          <span className="text-[14px] font-medium">Update</span>
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
