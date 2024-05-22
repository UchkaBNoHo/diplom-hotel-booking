const express = require("express");
const protect = require("../middleware/protect");
const {
  getHotels,
  getHotel,
  addHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelController");

const router = express.Router();

router.get("/", getHotels);
router.get("/:id", getHotel);
router.post("/", protect, addHotel);
router.put("/:id", protect, updateHotel);
router.delete("/:id", protect, deleteHotel);

module.exports = router;
