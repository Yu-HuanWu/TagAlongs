const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagAlongSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  startLocation: {
    type: String,
    required: true
  },
  startLatLng:{
    type: [Number],
    required:true
  },
  endLocation: {
    type: String,
    required: true
  },
  endLatLng:{
    type: [Number],
    required:true
  },
  category:{
    type: String,
    required:true
  }
},{
    timestamps:true
})

module.exports = TagAlong = mongoose.model("TagAlong", TagAlongSchema);