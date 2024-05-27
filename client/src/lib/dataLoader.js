import instance from "../../lib/axios";

export const listPageLoader = async ({ request }) => {
  console.log(request);
  const query = request.url.split("?")[1];
  console.log(query);
  const res = await instance.get("http://localhost:5000/api/hotels?" + query);
  console.log(res);
  return res.data;
};

export const singleHotelLoader = async ({ request, params }) => {
  const { id } = params;
  const res = await instance.get(`http://localhost:5000/api/hotels/${id}`);
  return res.data;
};
export const getAllHotelLoader = async ({ request }) => {
  const res = await instance.get(`http://localhost:5000/api/hotels/`);
  return res.data;
};
