const mongoose = require('mongoose')

const itemListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        minlength: 5,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    dateLastPurchased: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const item = mongoose.model('item', itemListSchema)
module.exports = item