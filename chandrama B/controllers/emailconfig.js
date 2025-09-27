const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();


const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, location, interestedPlot } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // keep in .env
        pass: process.env.GMAIL_PASS, // app password in .env
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Inquiry for ${interestedPlot}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Interested Plot: ${interestedPlot}
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

module.exports = router;
