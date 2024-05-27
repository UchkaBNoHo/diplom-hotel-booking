import React, { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import instance from "../../../lib/axios";
import image from "/done_7041760.png";
import { toast } from "sonner";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  // const {url} = useContext(StoreContext)

  console.log(success, orderId);

  const verifyPayment = async () => {
    const response = await instance.post(
      "http://localhost:5000/api/orders/verify",
      {
        success,
        orderId,
      }
    );
    if (response.data.success) {
      toast.success("Payment verified successfully");
    } else {
      toast.error("Payment verification failed");
    }
  };

  verifyPayment();

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-6  md:mx-auto">
        <img src={image} alt="" className="mx-auto w-16 h-16 mb-4" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <Link
              to={"/profile?text=myOrders"}
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              GO TO ORDERS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
