import { IoLocationOutline } from "react-icons/io5";
import { Marker, Popup } from "react-leaflet";
// import { Link } from "react-router-dom";
import hotel1 from "/hotel-1.jpg";
import { Link } from "react-router-dom";

function Pin({ hotel }) {
  console.log(hotel);

  return (
    <Marker position={[hotel?.latitude, hotel?.longitude]}>
      <Popup>
        <div className="w-[300px] max-[560px]:w-[200px]">
          <div className="w-[100%] aspect-[5/3] bg-red-900 rounded-[18px] overflow-hidden">
            <Link to={`/single_hotel/${hotel?._id}`}>
              <img
                src={hotel?.imageUrls[0] || hotel1}
                alt={hotel?.name}
                className="w-full h-full object-cover hover:scale-105 duration-150"
              />
            </Link>
          </div>
          <Link to={`/single_hotel/${hotel?._id}`}>
            <h2 className="text-[20px] font-medium mt-3 max-[560px]:text-[18px] hover:text-gray-600">
              {hotel?.name}
            </h2>
          </Link>
          <div className="flex gap-2 mt-1 items-center">
            <IoLocationOutline className="text-[20px] text-gray-600" />
            <span className="text-[15px] text-gray-600 font-normal max-[560px]:text-[13px]">
              {hotel?.address}
            </span>
          </div>
          <div className="flex gap-0 items-end mt-2">
            <h3 className="text-[21px] font-medium max-[560px]:text-[18px]">
              $ {hotel?.pricePerNight}
            </h3>
            <span className=" text-gray-500 text-[13px]">/night</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
