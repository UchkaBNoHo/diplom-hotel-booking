// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar/Navbar";
import image from "/hero-img.jpg";
import hotel1 from "/hotel-1.jpg";
import hotel2 from "/hotel-2.jpg";
import hotel3 from "/hotel-3.jpg";
import hotel4 from "/hotel-4.jpg";
import hotel5 from "/hotel-5.jpg";
import hotel6 from "/hotel-6.jpg";
import hotel7 from "/hotel-7.jpg";
import Filter from "./filter/Filter";
import Footer from "./Footer/Footer";
import HotelCard from "./HotelCard/HotelCard";
import MySwiperComponent from "./swiper/Swiper";

const Home = () => {
  return (
    <main className="max-[1400px]:px-8">
      {/* Navbar */}
      <Navbar />
      <MySwiperComponent />
      <Filter />

      {/* 5-star Hotels */}
      <div className="max-w-[1300px] m-auto">
        <div className="mt-[8rem] flex justify-between items-center max-[1140px]:mt-[6rem] max-md:mt-[4rem] max-md:flex-col max-md:items-start max-md:gap-2">
          <h1 className="text-4xl font-semibold w-[30%] leading-[1.4] max-xl:text-[30px] max-[1140px]:text-[26px] max-[910px]:w-[40%] max-md:w-[50%] max-md:text-[24px] max-[560px]:w-[80%]">
            Explore Our 5-stars Hotel!
          </h1>
          <p className="text-[15px] text-gray-600 font-light w-[30%] max-[1140px]:text-[14px] max-[1140px]:w-[36%] max-md:w-[100%]">
            Your vacation starts here. Book your stay and let us create an
            experience you&lsquo;ll never forget.
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-7 gap-y-10">
          <HotelCard
            img={hotel1}
            title="Golden Horizon Hotel"
            address="Collingwood VIC"
            price="1200"
          />
          <HotelCard
            img={hotel2}
            title="Whispering Wood Hotel"
            address="New York, USA"
            price="560"
          />
          <HotelCard
            img={hotel3}
            title="Sunset Lodge"
            address="Ulaanbaatar, Mongolia"
            price="12000"
          />
          <HotelCard
            img={hotel4}
            title="Enchanted Cottage"
            address="Kuala Lumpur, Malaysia"
            price="1750"
          />
          <HotelCard
            img={hotel5}
            title="Paradise Cove Retreat"
            address="Tokyo, Japan"
            price="2350"
          />
          <HotelCard
            img={hotel6}
            title="Emerald Valley Lodge"
            address="New Zealand, Australia"
            price="430"
          />
          <HotelCard
            img={hotel7}
            title="Future House"
            address="Seoul, Korea"
            price="1900"
          />
          <HotelCard
            img={image}
            title="Ocean Avenue"
            address="Hovsgol, Mongolia"
            price="34700"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
