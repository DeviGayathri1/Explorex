const express = require("express");
const axios = require("axios");
const router = express.Router();


router.get("/", async (req, res) => {
  console.log("📍 Nearby API hit");

  const { lat, lng } = req.query; // ✅ GET params

  if (!lat || !lng) {
    return res.status(400).json({ error: "Latitude and longitude required" });
  }

  try {
    const apiKey = process.env.GEOAPIFY_API_KEY; // 🔐 use .env

    const response = await axios.get(
      `https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${lng},${lat},20000&limit=20&apiKey=${apiKey}`
    );

    const places = response.data.features.map((f) => ({
      name: f.properties.name || "Unknown",
      category: Array.isArray(f.properties.categories)
        ? f.properties.categories.join(", ")
        : f.properties.categories || "Unknown",
      location: {
        type: "Point",
        coordinates: f.geometry.coordinates,
      },
    }));

    res.json(places); // ✅ array (matches frontend fix)
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;