const {body} = require('express-validator');

const registerValidation = [
    //Email check
    body('email').not().isEmpty().withMessage("Please fill out the email section")
    .isEmail().withMessage("Please provide a valid email address."),

    //Username check
    body('username').not().isEmpty().withMessage("Please provide a username"),

    //Password check
    body('password1').not().isEmpty().withMessage("Please provide a password"),

    body('password2').not().isEmpty().withMessage("Please provide a password")
    .custom((value, {req})=> {
        if (value !== req.body.password1) {
            throw new Error("Passwords must match");
        }
        return true;
    })

];

const loginValidation = [
    // Email should not be empty and must be a valid email
    body('username').not().isEmpty().withMessage("Username is required."),
    // Password should not be empty and needs to be min 6 chars
    body('password').not().isEmpty().withMessage("Password is required.")
];

module.exports = {registerValidation, loginValidation};