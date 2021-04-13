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
        type: Object,
        required: true
    },
    authors:{
        type: Array,
        default: []
    },
    viewers: {
        type: Array,
        default: []
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
    },
    share: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('list', ListSchema)