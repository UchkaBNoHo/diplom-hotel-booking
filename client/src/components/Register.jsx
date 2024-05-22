/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import registerImg from "/register_img.jpg";
import instance from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { currentUser, updateUser } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // console.log(userName, email, password, confirmPassword);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await instance.post(
        "http://localhost:5000/api/auth/register",
        {
          userName,
          email,
          password,
          confirmPassword,
        }
      );

      updateUser(res.data);

      console.log(res);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
      toast.error(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="p-3 max-w-screen-xl m-0 sm:m-4 sm:rounded-none bg-white shadow flex justify-center flex-1 rounded-[36px] overflow-hidden">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-4 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Start Your Trip
            </h1>
            <div className="flex items-center flex-col w-full mt-2 text-center">
              <div className="flex flex-col items-center py-0 rounded-full bg-slate-100 w-fit">
                <FcGoogle className="text-2xl" />
              </div>

              <div className="mt-2 mb-6 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-full px-6 py-3 rounded-[32px] font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 placeholder:font-normal text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                    className="w-full px-6 py-3 rounded-[32px] font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none placeholder:font-normal focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-6 py-3 rounded-[32px] font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none placeholder:font-normal focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="w-full px-6 py-3 rounded-[32px] font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none placeholder:font-normal focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-black text-gray-100 w-full py-3 rounded-[32px] hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit"
                  >
                    {loading === true ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      <span className="text-[14px] font-semibold">Start</span>
                    )}
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Already have an account?
                    <a
                      href="/login"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full rounded-[4px] overflow-hidden">
          <img
            src={registerImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
