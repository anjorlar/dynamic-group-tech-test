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

itemListSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const item = mongoose.model('item', itemListSchema)
module.exports = item