const mongoose = require('mongoose');
const {Schema} = mongoose;


const authorSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'error msg here'],
        trim: true,
        validator: {
            validate(v) {
                return v.length < 3
            },
            message: "Length longer than 2 please"
        },

    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, 'error msg here']
    },

    isAlive: {
        type: Boolean,
        default: true,
    },

    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        }
    ]
});

module.exports = mongoose.model('Author', authorSchema);

//with angular, no flash needed
//can collect validations and send back as string
//