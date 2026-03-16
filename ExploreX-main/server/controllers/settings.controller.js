const {
  getSettingsByUser,
  updateSettingsByUser,
} = require("../services/settings.service");

// GET settings
const getUserSettings = async (req, res) => {
  try {
    const { userId } = req.body; // <-- pass userId from frontend
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const settings = await getSettingsByUser(userId);
    res.status(200).json(settings);
  } catch (error) {
    console.error("Settings Fetch Error:", error);
    res.status(500).json({ message: "Failed to fetch settings" });
  }
};

// UPDATE settings
const updateUserSettings = async (req, res) => {
  try {
    const { userId, ...data } = req.body; // <-- pass userId from frontend
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const updated = await updateSettingsByUser(userId, data);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Settings Update Error:", error);
    res.status(500).json({ message: "Failed to update settings" });
  }
};

module.exports = {
  getUserSettings,
  updateUserSettings,
};
