// const mongoose = require("mongoose");

// const FavoriteSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true,
//     },

//     type: {
//       type: String,
//       enum: ["place", "trip"],
//       required: true,
//     },

//     data: {
//       type: Object,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Favorite", FavoriteSchema);
const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    data: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", favoriteSchema);
