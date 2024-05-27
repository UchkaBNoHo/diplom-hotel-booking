import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";

function Map({ hotels }) {
  // console.log(typeof hotels);
  // console.log(hotels);
  // console.log(hotels.length);
  let loc = [47.451866, 104.994015];
  if (hotels && hotels.latitude && hotels.longitude) {
    loc = [hotels.latitude, hotels.longitude];
  } else if (Array.isArray(hotels) && hotels.length === 1) {
    loc = [hotels[0].latitude, hotels[0].longitude];
  } else if (Array.isArray(hotels) && hotels.length > 1) {
    loc = [47.451866, 104.994015];
  } else if (Array.isArray(hotels) && hotels.length === 0) {
    loc = [47.451866, 104.994015];
  }

  const hotelsArray = Array.isArray(hotels) ? hotels : [hotels];
  console.log(loc);
  // console.log(hotels);
  return (
    <MapContainer
      center={loc}
      zoom={5}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotelsArray.length > 0
        ? hotelsArray.map((hotel) => <Pin hotel={hotel} key={hotel.id} />)
        : hotels.length > 0 && <Pin hotel={hotels} key={hotels.id} />}
    </MapContainer>
  );
}

export default Map;
