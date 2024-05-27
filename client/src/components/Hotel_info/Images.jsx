// eslint-disable-next-line no-unused-vars
import React from "react";
import hotel3 from "/hotel-3.jpg";

const Images = ({ data }) => {
  return (
    <div className="w-[68%] max-[845px]:w-full">
      <div className="w-full aspect-[6/3] rounded-[16px] overflow-hidden mb-2">
        <img src={data.imageUrls[0]} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex justify-between gap-1">
        <div className="w-[24%] aspect-[2/1] rounded-[12px] overflow-hidden">
          <img src={data.imageUrls[1]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[24%] aspect-[2/1] rounded-[12px] overflow-hidden">
          <img src={data.imageUrls[2]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[24%] aspect-[2/1] rounded-[12px] overflow-hidden">
          <img src={data.imageUrls[3]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[24%] aspect-[2/1] rounded-[12px] overflow-hidden">
          <img
            src={data.imageUrls[4] || hotel3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
