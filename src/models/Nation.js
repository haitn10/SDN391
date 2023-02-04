const mongoose = require("mongoose");
const { Schema } = mongoose;

const NationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ensign: {
    type: String,
    require: true,
  },
  countryID: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('Nation', NationSchema);
