/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Map from "../map/Map";
import { IoLocationOutline } from "react-icons/io5";
import hotel1 from "/hotel-1.jpg";
import hotel2 from "/hotel-2.jpg";
import hotel3 from "/hotel-3.jpg";
import { useLoaderData } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";

const Hotels = () => {
  const hotels = useLoaderData();
  console.log(hotels);
  return (
    <section className="w-[65%] max-lg:w-full">
      <h1 className="font-medium text-2xl">
        {hotels.length} Result{hotels.length <= 1 ? "" : "s"}
      </h1>
      <div className="w-full h-[400px] border-[1px] rounded-[16px] overflow-hidden mt-6">
        <Map hotels={hotels} />
      </div>
      <div className="flex flex-wrap justify-between mt-7 gap-y-10 gap-x-1 w-full">
        {hotels &&
          hotels.map((hotel) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <HotelCard
                hotel={hotel}
                img={hotel.img || hotel1}
                title={hotel.name}
                address={hotel.address}
                price={hotel.pricePerNight}
                listCard={true}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Hotels;
