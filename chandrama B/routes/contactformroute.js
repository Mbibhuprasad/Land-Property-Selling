const express = require("express");
const Contact = require("../models/contactform");

const router = express.Router();

// POST - Save contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Retrieve all contacts (for admin panel)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
