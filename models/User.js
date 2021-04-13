const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    writeableLists: {
        type: Array,
        default: []
    },
    readableLists: {
        type: Array,
        default: []
    }

})

module.exports = mongoose.model('user', UserSchema)