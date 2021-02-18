const mongoose = require('mongoose');
require('dotenv').config()
const e = require('express');
const db = process.env.MONGO_URI


const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;