const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TagAlongSchema = new Schema({

},{
  timestamls:true
})

module.exports = TagAlong = mongoose.model("TagAlong",TagAlongSchema);