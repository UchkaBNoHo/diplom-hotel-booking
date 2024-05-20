import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";

function Map({ posts }) {
  console.log(posts);
  return (
    <MapContainer
      center={[52.4797, -1.90269]}
      zoom={7}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {posts && posts.map((post) => (
        <Pin post={post} key={post.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
