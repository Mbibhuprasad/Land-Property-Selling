const express = require("express");
const router = express.Router();
const { getAllPublic, getDetails } = require("../controllers/plotController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", getAllPublic);
router.get("/:id", authMiddleware, getDetails); // details require login

module.exports = router;
