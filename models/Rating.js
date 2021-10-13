const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RatingSchema = new Schema({
  rating:{
    type: Number,
    required: true,
    min:-1,
    max:+1
  },
  reviewer:{
    type: Schema.Types.ObjectId,
    ref:'users'
  },
  reviewee:{
    type: Schema.Types.ObjectId,
    ref:'users'
  }
})



module.exports = Rating = mongoose.model('Rating',RatingSchema)