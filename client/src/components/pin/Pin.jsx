import { IoLocationOutline } from "react-icons/io5";
import { Marker, Popup } from "react-leaflet";
// import { Link } from "react-router-dom";
import hotel1 from "/hotel-1.jpg";

function Pin({ post }) {
  console.log(post);
  return (
    <Marker position={[post.latitude, post.longitude]}>
      <Popup>
        <div className="w-[300px] max-[560px]:w-[200px]">
          <div className="w-[100%] aspect-[5/3] bg-red-900 rounded-[18px] overflow-hidden">
            <img
              src={post.img || hotel1}
              alt={post.name}
              className="w-full h-full bg-cover"
            />
          </div>
          <h2 className="text-[20px] font-medium mt-3 max-[560px]:text-[18px]">{post.name}</h2>
          <div className="flex gap-2 mt-1 items-center">
            <IoLocationOutline className="text-[20px] text-gray-600" />
            <span className="text-[15px] text-gray-600 font-normal max-[560px]:text-[13px]">
              {post.address}
            </span>
          </div>
          <div className="flex gap-0 items-end mt-2">
            <h3 className="text-[21px] font-medium max-[560px]:text-[18px]">$ {post.pricePerNight}</h3>
            <span className=" text-gray-500 text-[13px]">/night</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
