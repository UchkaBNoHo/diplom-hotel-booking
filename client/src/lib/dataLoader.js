import instance from "../../lib/axios";

export const listPageLoader = async ({ request }) => {
  console.log(request);
  const query = request.url.split("?")[1];
  console.log(query);
  const res = await instance.get("http://localhost:5000/api/hotels?" + query);
  return res.data;
};
