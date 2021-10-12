const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTagAlongs(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.body = validText(data.body) ? data.body : '';
    data.user = validText(data.user) ? data.user : '';
    data.startLocation = validText(data.startLocation) ? data.startLocation : '';
    data.endLocation = validText(data.endLocation) ? data.endLocation : '';
    data.category = validText(data.category) ? data.category : '';

    // if (!Validator.isEmail(data.handle)) {
    //     errors.email = 'Email is invalid';
    // }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'title field is required';
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'body field is required';
    }

    if (Validator.isEmpty(data.user)) {
        errors.user = 'user field is required';
    }

    if (Validator.isEmpty(data.startLocation)) {
        errors.startLocation = 'startLocation field is required';
    }

    if (Validator.isEmpty(data.endLocation)) {
        errors.endLocation = 'endLocation field is required';
    }
    if (Validator.isEmpty(data.category)) {
        errors.category = 'category field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
