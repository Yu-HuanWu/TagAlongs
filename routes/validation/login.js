const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.handle = validText(data.handle) ? data.handle : '';
    data.password = validText(data.password) ? data.password : '';

    // if (!Validator.isEmail(data.handle)) {
    //     errors.email = 'Email is invalid';
    // }

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'handle field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};