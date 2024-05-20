const mongoose = require("mongoose");

const HotelModel = new mongoose.Schema(
  {
    ownerId: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    conveniences: [],
    pricePerNight: { type: Number, required: true },
    imageUrls: [{ type: String, required: true }],
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathroom: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", HotelModel);
