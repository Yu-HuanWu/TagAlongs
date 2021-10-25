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
  },
  startingTime:{
    type: Date,
    required:true
  },
  duration:{
    type: String,
    required: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  accepted:{
    type: Boolean,
    default:false
  },
  acceptedBy:{
    type: [Schema.Types.ObjectId],
    ref: 'users'
  }
},{
    timestamps:true
})

module.exports = TagAlong = mongoose.model("TagAlong", TagAlongSchema);