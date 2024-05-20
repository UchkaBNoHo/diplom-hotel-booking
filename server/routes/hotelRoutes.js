const express = require("express");
const protect = require("../middleware/protect");
const { getHotels } = require("../controllers/hotelController");

const router = express.Router();

router.get("/", getHotels);
// router.get("/:id", protect, login);
// router.put("/:id", protect, logout);
// router.delete("/:id", protect, logout);

module.exports = router;
