const hotelModel = require("../model/hotelModel");

exports.getHotels = async (req, res) => {
  const query = req.query;
  console.log(query);

  try {
    const filter = {};

    if (query.city) filter.city = query.city;
    if (query.type) filter.type = query.type;
    if (query.minPrice || query.maxPrice) {
      filter.pricePerNight = {};
      if (query.minPrice) filter.pricePerNight.$gte = parseInt(query.minPrice);
      if (query.maxPrice) filter.pricePerNight.$lte = parseInt(query.maxPrice);
    }
    if (query.conveniences) {
      // Split the conveniences string into an array if it's a comma-separated string
      const conveniencesArray = Array.isArray(query.conveniences)
        ? query.conveniences
        : query.conveniences.split(",");

      // Add the conveniences filter
      filter.conveniences = { $all: conveniencesArray };
    }

    // Log all hotels (for debugging)
    const allHotels = await hotelModel.find();
    console.log(allHotels);

    console.log(filter);

    // Query hotels with the constructed filter
    const filteredHotels = await hotelModel.find(filter);
    console.log(filteredHotels);

    // Respond with the filtered hotels
    res.status(200).json(filteredHotels);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

exports.getHotel = async (req, res) => {
  const id = req.params.id;
  try {
    const hotel = await hotelModel.findById(id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json(hotel);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get hotel" });
  }
};

exports.getHotelsByOwnerAndId = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  try {
    const hotel = await hotelModel.find({ ownerId: userId });
    console.log(hotel);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    return res.status(200).json(hotel);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get hotel" });
  }
};

exports.getHotelByUserId = async (req, res) => {
  const userId = req.params.id;
  try {
    const hotel = await hotelModel.findOne({ ownerId: userId });
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    return res.status(200).json(hotel);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get hotel" });
  }
};

exports.addHotel = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  console.log(tokenUserId);

  if (!body) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const newHotel = await hotelModel.create({
      ...body,
      ownerId: tokenUserId,
    });
    res.status(200).json(newHotel);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create hotel" });
  }
};

exports.updateHotel = async (req, res) => {
  const id = req.params.id;
  const hotel = await hotelModel.findById(id);
  const tokenUserId = req.userId;
  const body = req.body;

  if (hotel.ownerId !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }
  try {
    if (hotel._id.toString() !== id) {
      return res.status(403).json({ message: "Not Authorized!" });
    }
    const updatedHotel = await hotelModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json(updatedHotel);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update hotels" });
  }
};
exports.deleteHotel = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const hotel = await hotelModel.findById(id);

    if (hotel.ownerId !== tokenUserId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await hotelModel.deleteOne({ _id: id });

    res.status(200).json({ message: "Hotel deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete hotel" });
  }
};
