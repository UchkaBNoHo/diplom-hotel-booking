const express = require("express");
const protect = require("../middleware/protect");
const {
  getHotels,
  getHotel,
  addHotel,
  updateHotel,
  deleteHotel,
  getHotelsByOwnerAndId,
  getHotelByUserId,
} = require("../controllers/hotelController");

const router = express.Router();
router.get("/", getHotels);
router.get("/:id", getHotel);
router.get("/user/:id", getHotelByUserId);
router.get("/owner/:id", getHotelsByOwnerAndId);
router.post("/", protect, addHotel);
router.put("/:id", protect, updateHotel);
router.delete("/:id", protect, deleteHotel);

module.exports = router;
