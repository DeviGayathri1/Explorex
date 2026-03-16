const express = require("express");
const mongoose = require("mongoose"); // 👈 ADD THIS
const Settings = require("../models/settings.model");
const User = require("../models/User");
const router = express.Router();

// GET settings for a user
router.get("/:userId", async (req, res) => {
  try {
    let settings = await Settings.findOne({ userId: req.params.userId });

    if (!settings) {
      settings = await Settings.create({ userId: req.params.userId });
    }

    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


// UPDATE settings
router.put("/:userId", async (req, res) => {
  try {
    const updatedSettings = await Settings.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }   // 👈 THIS IS IMPORTANT
    );

    res.json(updatedSettings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


// DELETE user & settings
// DELETE user & settings
router.delete("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    await Settings.findOneAndDelete({ userId });
    await User.findByIdAndDelete(userId);

    res.json({ message: "User and settings deleted successfully" });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;



