const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "Detailed"
    },
    owner: {
        type: String,
        required: true
    },
    authors:{
        type: Array
    },
    viewers: {
        type: Array
    },
    description: {
        type: String
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    listItems: {
        type: Array,
        default: []
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    lastVisited: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('list', ListSchema)