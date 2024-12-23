const OrderModel = require("../model/OrderModel");

const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
exports.PlaceOrder = async (req, res) => {
  const data = req.body;
  console.log(data);
  console.log(data.data.pricePerNight);
  try {
    const checkInDate = new Date(data.checkInDate);
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + data.numberOfDays - 1);

    const newOrder = new OrderModel({
      userId: req.userId,
      hotelId: data.data._id,
      type: data.data.type,
      orderStatus: "Pending",
      address: data.data.address,
      price: data.totalPrice,
      payment: false,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    });
    await newOrder.save();

    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: data.data.name,
            images: [data.data.imageUrls[0]],
          },
          unit_amount: (data.totalPrice / data.numberOfDays) * 100,
        },
        quantity: data.numberOfDays,
      },
    ];
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:5173/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `http://localhost:5173/verify?success=false&orderId=${newOrder._id}`,
    });
    console.log(session);
    console.log("Session URL: ", session.url);
    // res.redirect(303, session.url);
    return res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "error" });
  }
};

exports.VerifyOrder = async (req, res) => {
  const { success, orderId } = req.body;
  try {
    if (success === "true") {
      const order = await OrderModel.findById(orderId);
      order.payment = true;
      order.orderStatus = "Ordered";
      await order.save();
      return res.json({ success: true, message: "Payment success" });
    } else {
      const order = await OrderModel.findById(orderId);
      order.payment = false;
      order.orderStatus = "Cancelled";
      await order.save();
      return res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

exports.getAllOrdersBasedOnUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const orders = await OrderModel.find({ userId: id });
    console.log(orders);
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllOrdersBasedOnHotel = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const orders = await OrderModel.find({ hotelId: id });
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.revenueOrder = async (req, res) => {
  const { id } = req.params;
  console.log("hello boy", id);

  try {
    const orders = await OrderModel.find({
      hotelId: id,
      orderStatus: "Ordered",
    });
    console.log("nigga", orders);
    const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
    return res.status(200).json({ totalRevenue });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to calculate revenue" });
  }
};

exports.bookedDates = async (req, res) => {
  const { hotelId } = req.params;
  try {
    const orders = await OrderModel.find({
      hotelId,
      orderStatus: "Ordered", // Assuming "Ordered" status indicates a successful booking
    }).select("checkInDate checkOutDate");

    const bookedDates = orders.reduce((dates, order) => {
      const startDate = order.checkInDate.toDateString();
      const endDate = order.checkOutDate.toDateString();

      // Generate an array of dates between startDate and endDate
      const dateRange = getDates(startDate, endDate);

      // Add the dates to the array of bookedDates
      return [...dates, ...dateRange];
    }, []);

    res.json({ bookedDates });
  } catch (error) {
    console.error("Error fetching booked dates:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Helper function to generate an array of dates between two dates
function getDates(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);

  while (currentDate <= endDateObj) {
    dates.push(new Date(currentDate).toDateString());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
