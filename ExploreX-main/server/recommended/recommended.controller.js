const Recommended = require("../models/recommended.db");
const { fetchFromGemini } = require("./recommended.service");
const { loadExcelData } = require("../utils/readCountryImages");


const FIVE_DAYS = 5 * 24 * 60 * 60 * 1000;

const getRecommendedPlaces = async (req, res) => {
  try {
    const cached = await Recommended.findOne();

    if (cached && Date.now() - cached.lastUpdated < FIVE_DAYS) {
      return res.json({
        success: true,
        places: cached.places,
        source: "cache"
      });
    }

    const freshPlaces = await fetchFromGemini();

    if (cached) {
      cached.places = freshPlaces;
      cached.lastUpdated = Date.now();
      await cached.save();
    } else {
      await Recommended.create({
        places: freshPlaces,
        lastUpdated: Date.now()
      });
    }

    res.json({
      success: true,
      places: freshPlaces,
      source: "gemini"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

module.exports = { getRecommendedPlaces };