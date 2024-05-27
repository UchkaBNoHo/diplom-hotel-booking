// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import image from "/hero-img.jpg";
import hotel5 from "/hotel-5.jpg";
import hotel6 from "/hotel-6.jpg";

const MySwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="max-w-[1300px] m-auto"
    >
      <SwiperSlide>
        <div className="relative max-w-[1300px] m-auto h-[520px] px-12 max-[1140px]:h-[450px] max-[910px]:h-[400px] max-md:px-9 max-md:h-[350px] max-[560px]:px-5 max-[560px]:h-[360px]">
          <img
            src={hotel6}
            alt=""
            className="absolute inset-0 z-[-2] w-full h-full object-cover bg-bottom rounded-[20px]"
          />
          <div className="absolute z-[-1] inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-[20px]"></div>
          <div className="w-full h-full max-w-[1300px] m-auto pt-[100px] max-lg:pt-[84px] max-md:pt-[60px] max-[560px]:pt-[40px]">
            <h1 className="text-white text-5xl max-w-[50%] leading-[70px] font-medium max-[1140px]:text-[42px] max-[1140px]:leading-[55px] max-lg:text-[38px] max-lg:leading-[48px] max-lg:max-w-[60%] max-[910px]:text-[32px] max-[910px]:leading-[40px] max-[910px]:max-w-[70%] max-md:text-[30px] max-[560px]:text-[26px] max-[560px]:leading-[34px]">
              Easily book your ideal hotel stay now.
            </h1>
            <p className="text-white mt-1 font-light text-[17px] max-[1140px]:text-[15px] max-[560px]:text-[13px]">
              Make your travel wishlist
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative max-w-[1300px] m-auto h-[520px] px-12 max-[1140px]:h-[450px] max-[910px]:h-[400px] max-md:px-9 max-md:h-[350px] max-[560px]:px-5 max-[560px]:h-[360px]">
          <img
            src={image}
            alt=""
            className="absolute inset-0 z-[-2] w-full h-full object-cover bg-bottom rounded-[20px]"
          />
          <div className="absolute z-[-1] inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-[20px]"></div>
          <div className="w-full h-full max-w-[1300px] m-auto pt-[100px] max-lg:pt-[84px] max-md:pt-[60px] max-[560px]:pt-[40px]">
            <h1 className="text-white text-5xl max-w-[50%] leading-[70px] font-medium max-[1140px]:text-[42px] max-[1140px]:leading-[55px] max-lg:text-[38px] max-lg:leading-[48px] max-lg:max-w-[60%] max-[910px]:text-[32px] max-[910px]:leading-[40px] max-[910px]:max-w-[70%] max-md:text-[30px] max-[560px]:text-[26px] max-[560px]:leading-[34px]">
              Book With Us And Enjoy Your Journey!
            </h1>
            <p className="text-white mt-1 font-light text-[17px] max-[1140px]:text-[15px] max-[560px]:text-[13px]">
              Make your travel wishlist
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative max-w-[1300px] m-auto h-[520px] px-12 max-[1140px]:h-[450px] max-[910px]:h-[400px] max-md:px-9 max-md:h-[350px] max-[560px]:px-5 max-[560px]:h-[360px]">
          <img
            src={hotel5}
            alt=""
            className="absolute inset-0 z-[-2] w-full h-full object-cover bg-bottom rounded-[20px]"
          />
          <div className="absolute z-[-1] inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-[20px]"></div>
          <div className="w-full h-full max-w-[1300px] m-auto pt-[100px] max-lg:pt-[84px] max-md:pt-[60px] max-[560px]:pt-[40px]">
            <h1 className="text-white text-5xl max-w-[50%] leading-[70px] font-medium max-[1140px]:text-[42px] max-[1140px]:leading-[55px] max-lg:text-[38px] max-lg:leading-[48px] max-lg:max-w-[60%] max-[910px]:text-[32px] max-[910px]:leading-[40px] max-[910px]:max-w-[70%] max-md:text-[30px] max-[560px]:text-[26px] max-[560px]:leading-[34px]">
              Find & book your ideal hotel effortlessly.
            </h1>
            <p className="text-white mt-1 font-light text-[17px] max-[1140px]:text-[15px] max-[560px]:text-[13px]">
              Make your travel wishlist
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* ... additional slides */}
    </Swiper>
  );
};

MySwiperComponent.displayName = "MySwiperComponent";

export default MySwiperComponent;
