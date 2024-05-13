// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar/Navbar";
import image from "../../public/hero-img.jpg";
import Filter from "./filter/Filter";

const Home = () => {
  return (
    <main className="h-[10000px]">
      {/* Navbar */}
      <Navbar />
      <div className="relative w-[100vw] h-[520px]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 z-[-2] w-full h-full object-cover bg-bottom"
        />
        <div className="absolute z-[-1] inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="w-full h-full max-w-[1300px] m-auto pt-[100px]">
          <h1 className="text-white text-5xl max-w-[50%] leading-[70px] font-medium">
            Book With Us And Enjoy Your Journey!
          </h1>
          <p className="text-white mt-1 font-light text-[17px]">
            Make your travel wishlist
          </p>
        </div>
      </div>
      <Filter />

      {/* Fall into Travell */}
    </main>
  );
};

export default Home;
