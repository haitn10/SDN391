const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  birth: {
    type: String,
    require: true,
  },
  nation: {
    type: [String],
  },

});

export default mongoose.model("Player", PlayerSchema);