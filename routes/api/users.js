const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        handle: req.user.handle,
        email: req.user.email
    });
})


router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = "User already exists";
                return res.status(400).json({ email: "A user is already registered with that email" })
            } else {
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password,
                    birthdate: req.body.birthdate,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    tagAlongs: []
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const payload = {
                                  _id: user.id,
                                  handle: user.handle,
                                  email: user.email,
                                  birthdate: user.birthdate,
                                  firstName: user.firstName,
                                  lastName: user.lastName,
                                  avatar: user.avatar,
                                  tagAlongsCompleted: user.tagAlongsCompleted,
                                  rating: user.rating,
                                  tagAlongs: user.tagAlongs
                                };
                                jwt.sign(
                                  payload, 
                                  keys.secretOrKey, 
                                  { expiresIn: 3600 }, 
                                  (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                        .catch(err => console.log(err));
                    });
                });
            }
        });
});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const handle = req.body.handle;
    const password = req.body.password;

    User.findOne({ handle })
        .then(user => {
            if (!user) {
                errors.handle = "This user does not exist";
                return res.status(400).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            _id: user.id,
                            handle: user.handle,
                            email: user.email,
                            birthdate: user.birthdate,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            avatar: user.avatar,
                            tagAlongsCompleted: user.tagAlongsCompleted,
                            rating: user.rating,
                            tagAlongs: user.tagAlongs
                        };
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 36000 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            }
                        );
                    } else {
                        return res.status(400).json({ password: "Incorrect Password" });
                    }
                });
        });
});



router.post('/update', (req, res) => {
    // const { errors, isValid } = validateRegisterInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    User.update({_id: req.body.UserID},{
      rating: req.body.rating,
      tagAlongs: req.body.tagAlongs,
      avatar: req.body.avatar,
      tagAlongsCompleted: req.body.tagAlongsCompleted
    }).then(()=>res.json({updated:"user was updated"}))
    .catch(err=>res.status(404).json({noUserFound:"No User was found with that ID"}))
});



router.post('/updateAvatar', (req, res) => {
    User.findOne({_id:req.body.UserID})
      .then((user)=>{
        if(user){
          user.avatar = req.body.avatar;
          user.markModified("avatar");
          user.save();
          return res.json(user)
        }
      })

});


router.get('/fetchUser/:id',(req,res)=>{
  User.findOne({_id:req.params.id})
    .then((user)=>{
      if(user){
        return res.json(user)
      }else{
        return res.status(400).json({ user: "User not found" });
      }
    })
    
})


// router.post('/addTagAlongs/:id', (req, res) => {
//     // const { errors, isValid } = validateRegisterInput(req.body);
//     // if (!isValid) {
//     //     return res.status(400).json(errors);
//     // }

//     // User.update({_id: req.params.UserID},{
//     //   tagAlongs: req.body.tagAlongs,
//     // }).then(()=>res.json({updated:"user was updated"}))
//     // .catch(err=>res.status(404).json({noUserFound:"No User was found with that ID"}))


//   User.findOne({id:req.params.id})
//     .then((user)=>{
      
//     })


// });


// axios.post(`/api/users/addTagAlongs/${currentUser.id}`)





module.exports = router;

