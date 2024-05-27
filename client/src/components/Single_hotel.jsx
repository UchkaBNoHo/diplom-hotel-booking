// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Images from "./Hotel_info/Images";
import SideCard from "./Hotel_info/SideCard";
import hotel1 from "/hotel-1.jpg";
import hotel2 from "/hotel-2.jpg";
import hotel3 from "/hotel-3.jpg";
import HotelCard from "./HotelCard/HotelCard";
import { useLoaderData } from "react-router-dom";
import { Toaster, toast } from "sonner";
// import instance from "../../lib/axios";
// import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
// import Cookies from "js-cookie";
import DOMPurify from "dompurify";
import Map from "./map/Map";

const Single_hotel = () => {
  // eslint-disable-next-line no-unused-vars
  const [isSingleHotel, setIsSingleHotel] = useState(true);
  const data = useLoaderData();
  console.log(data || "No data");
  // const user = JSON.parse(localStorage.getItem("user"));

  // const [isLoved, setIsLoved] = useState(false);
  // const token = Cookies.get("token");

  // useEffect(() => {
  //   if (user?.lovedHotels.includes(data?._id)) {
  //     setIsLoved(true);
  //   }
  // }, [data?._id, user?.lovedHotels]);
  // const HandleLoved = async () => {
  //   setIsLoved(!isLoved);

  //   try {
  //     const res = await instance.post(
  //       `http://localhost:5000/api/users/${data?._id}`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(res);
  //     toast.success(res.data.message);
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || "Failed to add to favourites"
  //     );
  //   }
  // };
  return (
    <main className="max-w-[1100px] m-auto max-[1400px]:px-8">
      <Navbar isSingleHotel={isSingleHotel} />
      <Breadcrumbs
        isSingleHotel={isSingleHotel}
        directionURL="/hotel_list"
        direction="List"
        current={data?.name}
      />
      <Toaster position="top-center" />
      <div className="relative max-w-[1100px] m-auto flex items-center justify-between">
        <div className="">
          <h1 className="text-4xl font-medium max-md:text-[30px] max-[510px]:text-[22px]">
            {data?.name}
          </h1>
          <span className="text-[#8f8f8f] max-[510px]:text-[13px]">
            {data?.address}
          </span>
        </div>
        {/* {!isLoved && (
          <IoMdHeartEmpty
            className="text-2xl cursor-pointer relative top-3 right-3 hover:text-[26px] duration-50 hover:right-[11px] hover:top-[11px]"
            onClick={HandleLoved}
          />
        )}
        {isLoved && (
          <IoMdHeart
            className="text-red-500 text-2xl cursor-pointer relative top-3 right-3 hover:text-[26px] duration-50 hover:right-[11px] hover:top-[11px]"
            onClick={HandleLoved}
          />
        )} */}
      </div>
      <div className="max-w-[1100px] m-auto mt-5 flex justify-between">
        <Images data={data} />
        <SideCard data={data} />
      </div>
      <div className="max-w-[1100px] m-auto mt-6 mb-6 pb-10 border-b-[1px] border-gray-200">
        <div className="">
          <h3 className="text-lg font-medium">About</h3>
          <p
            className="text-[#8f8f8f] text-[14px] w-[68%] leading-[1.5] mt-1 max-[845px]:w-[100%] max-md:text-[13px]"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.description),
            }}
          ></p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">Facilities</h3>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
            {data?.conveniences.map((convenience) => (
              <div
                key={convenience}
                className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer"
              >
                <span>{convenience}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">Where</h3>
          <div className="w-full h-[400px] border-[1px] rounded-[16px] overflow-hidden mt-6">
            <Map hotels={data} />
          </div>
        </div>
      </div>
      {/* <h2 className="text-2xl font-medium">Recommended for you</h2>
      <div className="max-w-[1100px] m-auto flex flex-wrap justify-between mt-7 gap-y-10">
        <HotelCard
          img={hotel1}
          title="Golden Horizon Hotel"
          address="Collingwood VIC"
          price="1200"
          listCard={true}
        />
        <HotelCard
          img={hotel2}
          title="Whispering Wood Hotel"
          address="New York, USA"
          price="560"
          listCard={true}
        />
        <HotelCard
          img={hotel3}
          title="Sunset Lodge"
          address="Ulaanbaatar, Mongolia"
          price="12000"
          listCard={true}
        />
      </div> */}
      <Footer isSingleHotel={isSingleHotel} />
    </main>
  );
};

export default Single_hotel;
