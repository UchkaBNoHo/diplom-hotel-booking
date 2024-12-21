// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { loadStripe } from "@stripe/stripe-js";
import instance from "../../../lib/axios";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";

dayjs.extend(customParseFormat);

const SideCard = ({ data }) => {
  const [checked, setChecked] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [bookedDates, setBookedDates] = useState([]);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const token = Cookies.get("token");

  const breakfastPrice = checked
    ? (data?.pricePerNight / 20) * numberOfDays
    : 0;
  const price = data?.pricePerNight * numberOfDays + breakfastPrice;
  const tax = price / 10;
  const totalPrice = price + tax;

  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";

  const handleDateChange = (dates) => {
    setDateRange(dates);
    if (dates && dates[0] && dates[1]) {
      const startDate = dayjs(dates[0]);
      const endDate = dayjs(dates[1]);
      const days = endDate.diff(startDate, "day") + 1;
      setNumberOfDays(days);
      setCheckInDate(startDate.format(dateFormat));
      setCheckOutDate(endDate.format(dateFormat));
    } else {
      setNumberOfDays(0);
      setCheckInDate(null);
      setCheckOutDate(null);
    }
  };

  console.log(data);

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await instance.get(
          `http://localhost:5000/api/orders/booked-dates/${data._id}`
        );
        console.log(response.data.bookedDates);
        setBookedDates(response.data.bookedDates);
      } catch (error) {
        console.error("Error fetching booked dates:", error);
      }
    };
    fetchBookedDates();
  }, [data._id]);

  // Disable dates that are booked
  const disabledDate = (current) => {
    return bookedDates.some((date) => dayjs(current).isSame(date, "day"));
  };

  const makePaymnent = async () => {
    toast.loading("Loading...");
    const stripe = await loadStripe(
      "pk_test_51PG1OIKKeL1ToGCvm91gIzmO5ZZx6vueYcRtpUhn1GNrgmAdxBIrUr9Oh8rl4hL4nzgyOVV3n7rBhxaeQeo7fvcO00R9Zu8PAe"
    );
    const body = {
      data,
      checkInDate,
      checkOutDate,
    };
    try {
      const response = await instance.post(
        "http://localhost:5000/api/orders/place",
        { ...body, numberOfDays, breakfastPrice, tax, totalPrice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        toast.error("error");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="w-[30%] rounded-[12px] p-2 h-fit bg-gray-100 max-lg:hidden">
        <Toaster position="top-center" />
        <div className="bg-white rounded-[8px] p-4 py-6">
          <div className="flex flex-col mb-5">
            <label htmlFor="city" className="text-gray-400 mb-2">
              Location
            </label>
            <input
              type="text"
              id="city"
              value={`${data?.city}, ${data?.country}`}
              readOnly
              className="text-[15px] w-[100%] rounded-[32px] px-3 py-[10px] border-[1px] border-gray-300"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="date" className="text-gray-400 mb-2">
              Select Days
            </label>
            <RangePicker
              defaultValue={[
                dayjs("2015/01/01", dateFormat),
                dayjs("2015/01/01", dateFormat),
              ]}
              name="date"
              format={dateFormat}
              onChange={handleDateChange}
              disabledDate={disabledDate}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-400 mb-2">
              Breakfast
            </label>
            <div className="flex gap-3 items-center">
              <input type="checkbox" onChange={() => setChecked(!checked)} />
              <span>Breakfast included</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[8px] p-4 mt-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-[15px]">Pricing per night</p>
            <span>$ {data?.pricePerNight}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-[15px]">Pricing for breakfast</p>
            <span>$ {breakfastPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium text-[15px]">Tax</p>
            <span>$ {tax}</span>
          </div>
        </div>
        <div className="bg-white rounded-[8px] p-4 mt-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-[15px]">TotalPrice</p>
            <span>$ {totalPrice}</span>
          </div>
        </div>
        <div
          className="w-full mt-3 text-center rounded-[32px] bg-black py-2"
          onClick={makePaymnent}
        >
          <a href="#" className="text-white text-[14px]">
            Reverse
          </a>
        </div>
      </div>
      <div className="hidden mt-3 text-center rounded-[32px] bg-black py-3 px-12 fixed z-20 top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-lg:block">
        <button
          className="text-white text-[14px]"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Reverse
        </button>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="bg-white rounded-[8px] p-4 py-6">
            <div className="flex flex-col mb-5">
              <label htmlFor="city" className="text-gray-400 mb-2">
                Location
              </label>
              <input
                type="text"
                id="city"
                value="Jakarta, IND"
                readOnly
                className="text-[15px] w-[100%] rounded-[32px] px-3 py-[10px] border-[1px] border-gray-300"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="date" className="text-gray-400 mb-2">
                Select Days
              </label>
              <input
                type="date"
                id="date"
                className="text-[15px] w-[100%] rounded-[32px] px-3 py-[10px] border-[1px] border-gray-300"
              />
              <DatePicker />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-gray-400 mb-2">
                Breakfast
              </label>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span>Breakfast included</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[8px] p-4 mt-3">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-[15px]">Pricing per night</p>
              <span>$ {data?.pricePerNigh}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-[15px]">Pricing for breakfast</p>
              <span>$ {data?.pricePerNight / 20}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-[15px]">Pricing for breakfast</p>
              <span>$ </span>
            </div>
          </div>
          <div className="w-full mt-3 text-center rounded-[32px] bg-black py-2">
            <a href="#" className="text-white text-[14px]">
              Reverse
            </a>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default SideCard;
