const NearbyPlace = require("../models/nearbyPlace.model");

const getNearbyPlaces = async () => {
  // Later you can filter by location
  return await NearbyPlace.find().limit(10);
};

module.exports = { getNearbyPlaces };
