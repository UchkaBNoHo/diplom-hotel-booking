const mongoose = require("mongoose");

const OrderModel = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    hotelId: { type: String, required: true },
    orderStatus: { type: String, required: true },
    type: { type: String, required: true },
    address: { type: String, required: true },
    payment: { type: Boolean, default: false },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderModel);
