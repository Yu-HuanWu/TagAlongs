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
        rating.rating = req.body.rating;
        rating.markModified("rating");
        rating.save();
        User.findOne({_id:rating.reviewPair[1]})
          .then((user)=>{
            if(rating.rating === 1){
              user.rating = user.rating + 2
            }else{
              user.rating = user.rating - 2
            }
            user.markModified("rating");
            user.save();
          })
        return res.json(rating)
      }else{
        const newRating = new Rating({
          rating: req.body.rating,
          reviewPair: req.body.reviewPair,
          // ratedByOwner: req.body.ratedByOwner,
          // ratedByAccepted: req.body.ratedByAccepted
        });
        newRating.save().then(rating => {
          User.findOne({_id:newRating.reviewPair[1]})
          .then( (user) => {
            user.rating = user.rating + newRating.rating
            user.markModified("rating");
            user.save();
          })
          return res.json(rating)
        }).catch(err=>res.status(404).json({duplicateFound:"Rating already submitted. You may only rate a user once."}))
      }
    })
})

router.get("/show/:id", (req, res) => {
  Rating.findById(req.params.id)
    .then(rating => res.json(rating))
    .catch(err=> res.status(404).json({noRatingFound: "No Ratings was found with that ID"}))
});



module.exports = router

