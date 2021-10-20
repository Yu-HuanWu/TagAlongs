const express = require("express")
const router = express.Router();
const TagAlong = require("../../models/TagAlong")
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const validateTagAlongs = require("../validation/createTagAlong")

router.get("/test", (req, res) => res.json({ msg: "This is the tagAlongs route" }));


router.get("/all", (req,res)=>{
  TagAlong.find().then((data)=>{
    let filtered = data.filter(tags =>{
      return tags.accepted === false
    })
    return res.json(filtered)})
})



router.post("/createTagAlong",
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
          startLatLng: req.body.startLatLng,
          endLocation: req.body.endLocation,
          endLatLng: req.body.endLatLng,
          category: req.body.category,
          date: req.body.date,
          startingTime: req.body.startingTime,
          duration: req.body.duration,
          completed:false,
          accepted:false,
          acceptedBy:[]
        });
        newTagAlong.save().then(tagAlong => {
          User.findOne({id:req.body.user})
            .then((user)=>{
              let usersTags = user.tagAlongs;
              usersTags.push(tagAlong.id);
              user.tagAlongs = usersTags
              user.markModified("tagAlongs");
              user.save();
            })
          res.json(tagAlong)
        })
      }
    })
})


router.get("/show/:id", (req,res)=>{
  TagAlong.findById(req.params.id)
    .then(tagAlong => res.json(tagAlong))
    .catch(err=> res.status(404).json({noTagAlongFound: "No TagAlong was found with that ID"}))
})

router.get("/update/:id",
passport.authenticate("jwt", { session: false }),
(req,res)=>{

  const {errors,isValid} = validateTagAlongs(req.body)
  
  if(!isValid){
    return res.status(400).json(errors);
  }

  TagAlong.findOne({id:req.params.id})
    .then((tagAlong)=>{
      if(!tagAlong){
        errors.id = "There is no TagALong with that ID";
        return res.status(400).json({ errors: "There is no TagALong with that ID" })
      }else{
          tagAlong.title = req.body.title,
          tagAlong.body = req.body.body,
          tagAlong.user = req.body.user,
          tagAlong.startLocation = req.body.startLocation,
          tagAlong.startLatLng = req.body.startLatLng,
          tagAlong.endLocation = req.body.endLocation,
          tagAlong.endLatLng = req.body.endLatLng,
          tagAlong.category = req.body.category,
          tagAlong.date = req.body.date,
          tagAlong.startingTime = req.body.startingTime,
          tagAlong.duration = req.body.duration

          tagAlong.markModified("title");
          tagAlong.markModified("body");
          tagAlong.markModified("user");
          tagAlong.markModified("startLocation");
          tagAlong.markModified("startLatLng");
          tagAlong.markModified("endLocation");
          tagAlong.markModified("endLatLng");
          tagAlong.markModified("category");
          tagAlong.markModified("date");
          tagAlong.markModified("startingTime");
          tagAlong.markModified("duration");
          tagAlong.save();
          return res.json(tagAlong)
      }
    })

})

router.post("/delete/:id",(req,res)=>{
  TagAlong.deleteOne({id:req.params.id})
    .then(() => res.json({deleted: "TagAlong was deleted"}))
    .catch(err=> res.status(404).json({noTagAlongFound: "No TagAlong was found with that ID"}))
})

router.get("/myAccepted/:userID",(req,res)=>{
  TagAlong.find().then((data)=>{
    let filtered = data.filter(tags=>{
      if(tags.completed === false){
        return tags.acceptedBy.includes(req.params.userID)
      }
    })
    return res.json(filtered)
  })
})

router.post("/acceptBy/:tagalongID",(req,res)=>{
  TagAlong.findOne({_id: req.params.tagalongID})
  .then((tagAlong)=>{
    tagAlong.accepted = true;
    tagAlong.acceptedBy = [req.body.userID];
    tagAlong.markModified("accepted");
    tagAlong.markModified("acceptedBy");
    tagAlong.save();
    return res.json(tagAlong)
  })
  .catch(err => res.status(404).json({noTagAlongFound: "No TagAlong was found with that ID"}))
})


router.get("/myPostedTags/:userID",(req,res)=>{
  TagAlong.find().then((data)=>{
    let filtered = data.filter(tags=>{
      return tags.user.toString() === req.params.userID
    })
    return res.json(filtered)
  })
})



router.post("/completeTagAlong/:tagalongID",(req,res)=>{
  TagAlong.findOne({_id: req.params.tagalongID})
  .then((tag)=>{
    tag.completed = true;
    tag.markModified("completed");
    tag.save();
    User.findOne({_id: tag.acceptedBy})
    .then((user)=>{
      user.tagAlongsCompleted++;
      user.markModified("tagAlongsCompleted");
      user.save();
      })
    return res.status(200).json({good:"tag was updated"})
  })
  .catch(err => res.status(404).json({noTagAlongFound: "No TagAlong was found with that ID"}))
})



router.get("/myCompletedTags/:userID",(req,res)=>{
  TagAlong.find().then((data)=>{
    let filtered = data.filter(tags=>{
      if(tags.completed === true && (tags.acceptedBy.includes(req.params.userID) || tags.user._id === req.params.userID)){
        return tags
      }
    })
    return res.json(filtered)
  })
})



module.exports = router