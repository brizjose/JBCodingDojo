const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    pages: {
        type: Number,
        required: true,
        min: 1,
    },
    year: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
});

module.exports = mongoose.model('Book', bookSchema);
