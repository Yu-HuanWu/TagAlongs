const express = require("express")
const router = express.Router();
const TagAlong = require("../../models/TagAlong")
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const validateTagAlongs = require("../validation/createTagAlong")

router.get("/test", (req, res) => res.json({ msg: "This is the tagAlongs route" }));

router.post("/createTagAlong",
passport.authenticate("jwt", { session: false }),
 (req,res) => {
  const {errors,isValid} = validateTagAlongs(req.body)
  
  if(!isValid){
    return res.status(400).json(errors);
  }

  TagAlong.findOne({title: req.body.title})
    .then(tagAlong =>{
      if (tagAlong){
        errors.title = "Title Already exists";
        return res.status(400).json({title: "A post already has that title"})
      }else{
        const newTagAlong = new TagAlong({
          title: req.body.title,
          body: req.body.body,
          user: req.body.user,
          startLocation: req.body.startLocation,
          endLocation: req.body.endLocation
        });

        newTagAlong.save().then(tagAlong => res.json(tagAlong))
      }
    })
})


router.get("/show/:id",(req,res)=>{
  TagAlong.findById(req.params.id)
    .then(tagAlong => res.json(tagAlong))
    .catch(err=> res.status(404).json({noTagAlongFound: "No TagAlong was found with that ID"}))
})



module.exports = router