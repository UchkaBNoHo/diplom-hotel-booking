// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import { CiHeart, CiWifiOn } from "react-icons/ci";
import Images from "./Hotel_info/Images";
import SideCard from "./Hotel_info/SideCard";
import hotel1 from "/hotel-1.jpg";
import hotel2 from "/hotel-2.jpg";
import hotel3 from "/hotel-3.jpg";
import {
  PiBathtubThin,
  PiCampfireThin,
  PiCarThin,
  PiDogThin,
  PiEyeThin,
  PiFlowerTulipThin,
  PiSnowflakeThin,
  PiTelevisionSimpleThin,
  PiThermometerHotThin,
  PiTreeLight,
  PiWavesThin,
} from "react-icons/pi";
import { LiaBathSolid } from "react-icons/lia";
import HotelCard from "./HotelCard/HotelCard";

const Single_hotel = () => {
  // eslint-disable-next-line no-unused-vars
  const [isSingleHotel, setIsSingleHotel] = useState(true);
  return (
    <main className="max-w-[1100px] m-auto max-[1400px]:px-8">
      <Navbar isSingleHotel={isSingleHotel} />
      <Breadcrumbs
        isSingleHotel={isSingleHotel}
        directionURL="/hotel_list"
        direction="List"
        current="Single Hotel"
      />
      <div className="max-w-[1100px] m-auto flex items-center justify-between">
        <div className="">
          <h1 className="text-4xl font-medium max-md:text-[30px] max-[510px]:text-[22px]">Radiant Residences</h1>
          <span className="text-[#8f8f8f] max-[510px]:text-[13px]">Serene Avenue, West Jakarta</span>
        </div>
        <CiHeart className="text-2xl cursor-pointer" />
      </div>
      <div className="max-w-[1100px] m-auto mt-5 flex justify-between">
        <Images />
        <SideCard />
      </div>
      <div className="max-w-[1100px] m-auto mt-6 mb-6 pb-10 border-b-[1px] border-gray-200">
        <div className="">
          <h3 className="text-lg font-medium">About</h3>
          <p className="text-[#8f8f8f] text-[14px] w-[68%] leading-[1.5] mt-1 max-[845px]:w-[100%] max-md:text-[13px]">
            Ace Hotel Kyoto lives in a part new build and part historic
            structure that was once home to a beloved landmark telephone
            company, designed in partnership with our longtime friends Commune
            Design and the legendary architect Kengo Kuma. Our first hotel in
            Asia, Ace Hotel Kyoto lives in the cultural epicenter of Japan, a
            place revered for its abundance of art, craft and nature.
            There&#39;s an inspired Lobby with a dedicated art gallery, three
            distinct restaurants by award-winning culinary partners, 24-hour
            gym, flexible event spaces and a verdant garden courtyard.
            There&#39;s also the first Stumptown Coffee Roasters cafe in Japan,
            and we&#39;re within walking distance to cultural landmarks like the
            Nishiki Market, Kyoto Art Center and Kamesuehiro, the iconic
            200-year old confectionary.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">Facilities</h3>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <CiWifiOn className="text-[18px] text-[#8f8f8f]" />
              <span>Wi-Fi</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiTreeLight className="text-[18px] text-[#8f8f8f]" />
              <span>in the woods</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiCampfireThin className="text-[18px] text-[#8f8f8f]" />
              <span>Hot Tubs</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiDogThin className="text-[18px] text-[#8f8f8f]" />
              <span>Dog Friendly</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiTelevisionSimpleThin className="text-[18px] text-[#8f8f8f]" />
              <span>TV</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiEyeThin className="text-[18px] text-[#8f8f8f]" />
              <span>Mountain view</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiSnowflakeThin className="text-[18px] text-[#8f8f8f]" />
              <span>Air conditioning</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiBathtubThin className="text-[18px] text-[#8f8f8f]" />
              <span>Bath</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiWavesThin className="text-[18px] text-[#8f8f8f]" />
              <span>Lakes & Rivers</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiFlowerTulipThin className="text-[18px] text-[#8f8f8f]" />
              <span>Backyard</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiCarThin className="text-[18px] text-[#8f8f8f]" />
              <span>Free parking</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <LiaBathSolid className="text-[18px] text-[#8f8f8f]" />
              <span>Hot water</span>
            </div>
            <div className="flex gap-2 items-center px-4 py-3 rounded-[12px] cshadow hover:shadow-lg duration-200 cursor-pointer">
              <PiThermometerHotThin className="text-[18px] text-[#8f8f8f]" />
              <span>Temperature</span>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-medium">Recommended for you</h2>
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
      </div>
      <Footer isSingleHotel={isSingleHotel} />
    </main>
  );
};

export default Single_hotel;
