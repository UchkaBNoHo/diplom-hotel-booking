const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://eeegggiiiuuugggiii:uchka039@cluster0.5lhhr5i.mongodb.net/",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

module.exports = connect;
