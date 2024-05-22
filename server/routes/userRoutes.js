const express = require("express");
const protect = require("../middleware/protect");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addLoved,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", protect, getUser);
router.post("/:id", protect, addLoved);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

module.exports = router;
