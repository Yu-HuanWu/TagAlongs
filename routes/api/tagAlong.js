const express = require("express")
const router = express.Router();
const TagAlong = require("../../models/TagAlong")
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');



router.get("/test", (req, res) => res.json({ msg: "This is the tagAlongs route" }));




module.exports = router