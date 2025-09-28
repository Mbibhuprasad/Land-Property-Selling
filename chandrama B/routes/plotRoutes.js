const express = require("express");
const router = express.Router();
const { getAllPublic, getDetails } = require("../controllers/plotController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", getAllPublic);
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    res.json({ message: "Protected plot details", user: req.user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
