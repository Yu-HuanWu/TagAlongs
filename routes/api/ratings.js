const express = require("express")
const router = express.Router();
const Rating = require("../../models/Rating")
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const validateRating = require('../validation/createRating')


router.get("/test", (req, res) => res.json({ msg: "This is the ratings route" }));


router.post("/createRating"
// ,
//   body('reviewPair').custom(value=>{
//     console.log("hitting middleware")
//     return Rating.findOne({reviewPair:value}).then(rating=>{
//       console.log(rating)
//       if(rating){
//         console.log("inside")
//         return Promise.reject('rating already made')
//         // return false;
//       }
//       console.log("hit outside")
//       return true;
//     })
//   })
,(req,res)=>{
  // console.log(req)
  const {errors, isValid} = validateRating(req.body)

  if(!isValid){
    return res.status(400).json(errors);
  }

  Rating.findOne({ reviewPair: req.body.reviewPair })
    .then((rating)=>{
      if(rating){
        errors.reviewPair = "review already exist"
        return res.status(400).json({reviewPair: "this Review Pair already exist"})
      }else{
        const newRating = new Rating({
          rating: req.body.rating,
          reviewPair: req.body.reviewPair,
        });
        newRating.save().then(rating => {
          User.findOne({id:newRating.reviewee})
          .then((user)=>{
            user.rating = user.rating + newRating.rating
            user.markModified("rating");
            user.save();
          })
          return res.json(rating)
        }).catch(err=>res.status(404).json({duplicateFound:"You cant Rate the same person twice"}))
      }
    })
})


module.exports = router

