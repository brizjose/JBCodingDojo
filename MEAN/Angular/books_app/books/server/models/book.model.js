const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'Provide book title'],
        minlength: [3, 'Make name at least 3 characters'],
        trim: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    pages: {
        type: Number,
        min: 1,
        required: true,
    },
    year: Number,
    publisher: String,
}, {timestamps: true});

module.exports = mongoose.model('Book', BookSchema);