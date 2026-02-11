const express = require("express");
const router = express.Router();
const Favorite = require("../models/Favorite");

/**
 * SAVE / TOGGLE FAVORITE
 */
router.post("/", async (req, res) => {
  try {
    const { userId, type, data } = req.body;

    if (!userId || !type || !data) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // check if already saved
    const existing = await Favorite.findOne({
      userId,
      type,
      "data.destination": data.destination,
    });

    if (existing) {
      await existing.deleteOne();
      return res.json({ message: "Removed from favorites" });
    }

    const favorite = new Favorite({ userId, type, data });
    await favorite.save();

    res.json({ message: "Saved to favorites", favorite });
  } catch (err) {
    console.error("❌ Favorite save error:", err);
    res.status(500).json({ message: "Save failed" });
  }
});
// DELETE favorite by ID
router.delete("/:id", async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ message: "Favorite deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

/**
 * GET USER FAVORITES
 */
router.get("/:userId", async (req, res) => {
  try {
    const favorites = await Favorite.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
});

module.exports = router;
