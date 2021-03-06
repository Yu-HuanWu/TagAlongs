const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RatingSchema = new Schema({
  rating:{
    type: Number,
    required: true,
    min:-1,
    max:+1
  },
  reviewPair:{
    type:[Schema.Types.ObjectId],
    required:true
  },
  // reviewedByOwner:{
  //   type: Boolean,
  //   default: false
  // },
  // reviewedByAccepted:{
  //   type: Boolean,
  //   default: false
  // }
})



module.exports = Rating = mongoose.model('Rating',RatingSchema)