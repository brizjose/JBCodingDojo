const mongoose = require('mongoose');
const {Schema} = mongoose;


const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
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
