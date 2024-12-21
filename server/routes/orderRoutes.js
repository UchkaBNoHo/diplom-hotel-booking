const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const protect = require("../middleware/protect");
const {
  PlaceOrder,
  VerifyOrder,
  getAllOrdersBasedOnUser,
  deleteOrder,
  getAllOrdersBasedOnHotel,
  revenueOrder,
  bookedDates,
} = require("../controllers/orderController");

const router = express.Router();

// router.get('/', getAllOrders);
router.get("/booked-dates/:hotelId", bookedDates);
router.get("/:id", getAllOrdersBasedOnUser);
router.get("/hotel/:id", getAllOrdersBasedOnHotel);
router.post("/place", protect, PlaceOrder);
router.post("/verify", VerifyOrder);
router.delete("/:id", protect, deleteOrder);
router.get("/revenue/:id", revenueOrder);

module.exports = router;
