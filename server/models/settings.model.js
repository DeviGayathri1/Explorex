// const mongoose = require("mongoose");

// const settingsSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//       unique: true,
//     },
//     travelPersonality: { type: String, default: "structured" },
//     themePersonality: { type: String, default: "classic" },
//     trending: { type: Boolean, default: true },
//     similar: { type: Boolean, default: true },
//     hidden: { type: Boolean, default: false },
//     nearby: { type: Boolean, default: true },
//     tripUpdates: { type: Boolean, default: true },
//     priceAlerts: { type: Boolean, default: true },
//     aiSuggestions: { type: Boolean, default: true },
//     useLocation: { type: Boolean, default: true },
//     activityTracking: { type: Boolean, default: true },
//   },
//   { timestamps: true }
// );

// module.exports = require("mongoose").model("Settings", settingsSchema);


const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  TravelPersonality: { type: String, default: "structured" },
  ThemePersonality: { type: String, default: "classic" },
  trending: { type: Boolean, default: true },
  similar: { type: Boolean, default: true },
  hidden: { type: Boolean, default: false },
  nearby: { type: Boolean, default: true },
  Tripupdates: { type: Boolean, default: true },
  Pricealerts: { type: Boolean, default: true },
  AIrecommendations: { type: Boolean, default: true },
  Uselocation: { type: Boolean, default: true },
  activityTracking: { type: Boolean, default: true },
});

module.exports = mongoose.model("settings.model", SettingsSchema);
