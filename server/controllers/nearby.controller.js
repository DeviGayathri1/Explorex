const { getNearbyPlaces } = require("../services/nearby.service");

const fetchNearbyPlaces = async (req, res) => {
  try {
    const places = await getNearbyPlaces();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch nearby places" });
  }
};

module.exports = { fetchNearbyPlaces };
