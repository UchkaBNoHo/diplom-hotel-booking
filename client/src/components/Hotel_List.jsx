// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar/Navbar";
import SideSort from "./Hotel_list/SideSort";
import Hotels from "./Hotel_list/Hotels";
import Footer from "./Footer/Footer";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const Hotel_List = () => {
  return (
    <main className="max-[1400px]:px-8">
      <Navbar />
      <Breadcrumbs directionURL="/" direction="Home" current="Hotel List"/>
      <div className="flex justify-between max-w-[1300px] m-auto mt-5 max-lg:flex-col">
        <SideSort />
        <Hotels />
      </div>
      <Footer />
    </main>
  );
};

export default Hotel_List;
