const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");

const { authMiddleware, requireRole } = require("../middleware/authMiddleware");
const {
  createPlot,
  updatePlot,
  deletePlot,
  adminGetAll,
} = require("../controllers/plotController");

// router.use(authMiddleware);
// router.use(requireRole("admin"));

router.post("/", upload.array("images", 8), createPlot);
router.put("/:id", upload.array("images", 8), updatePlot);
router.delete("/:id", deletePlot);
router.get("/", adminGetAll);

module.exports = router;
