const mongoose = require('mongoose');

const ListItemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date
    },
    recurring: {
        type: Number,
        default: 0
    },
    checked: {
        type: Boolean,
        default: false
    },
    checkedDate: {
        type: Date,
    },
    checkedBy: {
        type: String,
    }

})

module.exports = mongoose.model('listItem', ListItemSchema)