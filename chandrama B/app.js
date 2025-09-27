const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");
const plotRoutes = require("./routes/plotRoutes");
const adminPlotRoutes = require("./routes/adminPlotRoutes");
const emailConfig = require("./controllers/emailconfig");

const app = express();

app.use(cors());
app.use(express.json());

// serve uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/plots", plotRoutes);
app.use("/api/admin/plots", adminPlotRoutes);
app.use("/api/contact", emailConfig);

// simple health
app.get("/", (req, res) => res.send("Plot Selling API"));

module.exports = app;
