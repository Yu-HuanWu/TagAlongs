const Validator = require('validator');
const validText = require('./valid-text');
const Rating = require("../../models/Rating")


module.exports = function validateRating(data) {
    let errors = {};

    data.rating = validText(data.rating) ? data.rating : '';
    data.reviewer = validText(data.reviewer) ? data.reviewer : '';
    data.reviewee = validText(data.reviewee) ? data.reviewee : '';

    // if (!Validator.isEmail(data.handle)) {
    //     errors.email = 'Email is invalid';
    // }
    // console.log(data.reviewer)
    // console.log(data.reviewee)

    if (Validator.isEmpty(data.rating)) {
        errors.rating = 'rating field is required';
    }

    // if (Validator.isEmpty(data.reviewer)) {
    //     errors.reviewer = 'reviewer field is required';
    // }
    // if (Validator.isEmpty(data.reviewee)) {
    //     errors.reviewee = 'reviewee field is required';
    // }

    // Rating.findOne({reviewer:data.reviewer})
    // .then((rating)=>{
    //     console.log(rating)
    //     console.log(rating.reviewee.toString())
    //     console.log(rating.reviewee.toString() === data.reviewee)
    //     if(rating){
    //       if(rating.reviewee.toString() === data.reviewee){
    //         errors.reviewer = "reviewer already reviewed this person"
    //       }
    //       console.log("inner")
    //       console.log(errors)
    //       return {
    //         errors,
    //         isValid: Object.keys(errors).length === 0
    //       };
    //     }
        
    //   })
    //   console.log("outter")
      return {
        errors,
        isValid: Object.keys(errors).length === 0
      };
};
