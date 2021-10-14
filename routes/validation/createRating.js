const Validator = require('validator');
const validText = require('./valid-text');
const Rating = require("../../models/Rating")


module.exports = function validateRating(data) {
    let errors = {};

    data.rating = validText(data.rating) ? data.rating : '';
    data.reviewer = validText(data.reviewer) ? data.reviewer : '';
    data.reviewee = validText(data.reviewee) ? data.reviewee : '';

    if (Validator.isEmpty(data.rating)) {
        errors.rating = 'rating field is required';
    }

      return {
        errors,
        isValid: Object.keys(errors).length === 0
      };
};
