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

  const newRating = new Rating({
    rating: req.body.rating,
    reviewer: req.body.reviewer,
    reviewee: req.body.reviewee
  });
  newRating.save().then(rating => res.json(rating))
})


module.exports = router