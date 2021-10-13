const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRating(data) {
    let errors = {};

    data.rating = validText(data.rating) ? data.rating : '';
    data.reviewer = validText(data.reviewer) ? data.reviewer : '';
    data.reviewee = validText(data.reviewee) ? data.reviewee : '';

    // if (!Validator.isEmail(data.handle)) {
    //     errors.email = 'Email is invalid';
    // }

    if (Validator.isEmpty(data.rating)) {
        errors.rating = 'rating field is required';
    }

    if (Validator.isEmpty(data.reviewer)) {
        errors.reviewer = 'reviewer field is required';
    }
    if (Validator.isEmpty(data.reviewee)) {
        errors.reviewee = 'reviewee field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};