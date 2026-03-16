const Settings = require("../models/settings.model");

// Get settings by userId
const getSettingsByUser = async (userId) => {
  let settings = await Settings.findOne({ userId });
  if (!settings) {
    settings = await Settings.create({ userId });
  }
  return settings;
};

// Update settings by userId
const updateSettingsByUser = async (userId, data) => {
  const updated = await Settings.findOneAndUpdate(
    { userId },
    { ...data },
    { new: true, upsert: true }
  );
  return updated;
};

module.exports = {
  getSettingsByUser,
  updateSettingsByUser,
};
