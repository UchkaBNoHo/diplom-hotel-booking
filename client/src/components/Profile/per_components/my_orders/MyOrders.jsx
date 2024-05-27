import { useContext, useEffect, useState } from "react";
import instance from "../../../../../lib/axios";
import { AuthContext } from "../../../../context/AuthContext";
import moment from "moment";
import { MdCancel } from "react-icons/md";

const MyOrders = () => {
  const { currentUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const TABLE_HEADS = [
    "Date",
    "Customer",
    "Type",
    "Price",
    "Status",
    "Paid",
    "Action",
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(
          `http://localhost:5000/api/orders/${currentUser.userId}`
        );
        console.log(res);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser]);

  const dateString = orders?.createdAt;
  const formattedDate = moment(dateString).format("MMMM DD, YYYY");
  //   console.log(formattedDate);

  const handleDelete = async (id) => {
    try {
      const res = await instance.delete(
        `http://localhost:5000/api/orders/${id}`
      );
      console.log(res);
      setOrders(orders.filter((order) => order._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[73%]">
      <h1 className="text-xl font-medium mb-4">My Orders ({orders.length})</h1>
      <div className="">
        <table className="w-full bg-white border-collapse border-[1px] border-gray-300 rounded-[6px]">
          <thead className="text-left text-[17px] border-b-[1px] border-gray-300">
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index} className="px-[14px] py-[12px]">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => {
              return (
                <tr key={order._id}>
                  <td className="px-[14px] py-[12px]">{formattedDate}</td>
                  <td className="px-[14px] py-[12px]">
                    {currentUser.userName}
                  </td>
                  <td className="px-[14px] py-[12px]">{order.type}</td>
                  <td className="px-[14px] py-[12px]">${order.price}</td>
                  {order.orderStatus === "Pending" && (
                    <td className="text-orange-300 px-[14px] py-[12px]">
                      {order.orderStatus}
                    </td>
                  )}
                  {order.orderStatus === "Ordered" && (
                    <td className="text-green-500 px-[14px] py-[12px]">
                      {order.orderStatus}
                    </td>
                  )}
                  {order.orderStatus === "Cancelled" && (
                    <td className="text-red-500 px-[14px] py-[12px]">
                      {order.orderStatus}
                    </td>
                  )}
                  <td className="px-[14px] py-[12px]">
                    {order.payment === true ? "True" : "False"}
                  </td>
                  <td className="px-[14px] py-[12px] flex justify-center items-center">
                    <MdCancel
                      className="text-[20px] text-red-500 cursor-pointer hover:text-red-400"
                      // onClick={handleDelete(order._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyOrders;
