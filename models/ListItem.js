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
        type: String,
        default: "0"
    },
    catagories: {
        type: Array,
        default: []
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

module.exports = mongoose.model('listItem', ListItemSchema, 'listItems')