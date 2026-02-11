const express = require("express");
const Favorite = require("../models/Favorite");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, type, data } = req.body;

    if (!userId || !type || !data) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const favorite = new Favorite({ userId, type, data });
    await favorite.save();

    res.status(201).json({ message: "Saved", favorite });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Save failed" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.params.userId });
    res.json(favorites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Fetch failed" });
  }
});

module.exports = router;

