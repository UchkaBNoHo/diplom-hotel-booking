const express = require("express");
const protect = require("../middleware/protect");
const { getHotels } = require("../controllers/hotelController");
const { getUsers, getUser, updateUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", protect, getUser);
router.put("/:id", protect, updateUser);
// router.delete("/:id", protect, deleteUser);

module.exports = router;
