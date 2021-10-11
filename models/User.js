const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate:{
      type: Date,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName:{
      type: String,
      required: true
    }
}, {
    timestamps: true
})

// const User = mongoose.model('users', UserSchema);
// module.exports = User;

module.exports = User = mongoose.model('User', UserSchema);