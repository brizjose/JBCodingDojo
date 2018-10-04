//dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { Schema, model } = mongoose;

//schemas
const userSchema = new Schema ({
    first_name: {
        type: String,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,  //creates a unique index based on the entered email
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 8,
        validate: {
            validator: (value) => {
                return /^(?=.*[a-z])(?=[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password requirements: at least one number, uppercase and special character and be at least 8 characters long"
        }
    },
    date_of_birth: {
        type: Date,
        required: [true, 'Please enter your birth date']
    }
}, {timestamps: true});

//Hash PW:
userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, 10)
        .then(hashed_password => {
            this.password = hashed_password;
            next();
        })
        .catch(next);
});

//pw validation
userSchema.statics.validatePassword = function(password_from_form, stored_hashed_password) {
    return bcrypt.compare(password_from_form, stored_hashed_password);
};

//register the model and export it
//we are using model.call instead of model.mongoose because we have destructured model from mongoose already on line 3 above.  What call() does is return model into the mongoose context.  As it stands, its context is this file, not mongoose, so we need call().  Remember call() is for comma separated values and apply() for an array
module.exports = model.call(mongoose, 'User', userSchema);

