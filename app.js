const express = require("express");
const app = express();
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURI;
const passport = require('passport');
const User = require('./models/User');
const TagAlong = require('./models/TagAlong')
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = require("./routes/api/users");
const tagAlongs = require("./routes/api/tagAlong")

app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.use("/api/users", users);
app.use("/api/tagAlong", tagAlongs);


app.listen(port, () => { console.log(`Listening on port ${port}`) });
