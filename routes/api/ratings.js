const express = require("express")
const router = express.Router();
const Rating = require("../../models/Rating")
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const validateRating = require('../validation/createRating')


router.get("/test", (req, res) => res.json({ msg: "This is the ratings route" }));


router.post("/createRating",(req,res)=>{
  const {errors, isValid} = validateRating(req.body)
  if(!isValid){
    return res.status(400).json(errors);
  }
  Rating.findOne({ reviewPair: req.body.reviewPair })
    .then((rating)=>{
      if(rating){
        errors.reviewPair = "Review already exists."
        return res.status(400).json({reviewPair: "You've already rated your TagAlong partner."})
      }else{
        const newRating = new Rating({
          rating: req.body.rating,
          reviewPair: req.body.reviewPair,
          ratedByOwner: req.body.reviewPair[0],
          ratedByAccepted: req.body.reviewPair[1]
        });
        newRating.save().then(rating => {
          User.findOne({_id:newRating.reviewPair[1]})
          .then((user)=>{
            user.rating = user.rating + newRating.rating
            user.markModified("rating");
            user.save();
          })
          return res.json(rating)
        }).catch(err=>res.status(404).json({duplicateFound:"You've already rated your TagAlong partner."}))
      }
    })
})


module.exports = router

