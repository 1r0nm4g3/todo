const mongoose = require('mongoose');
const config = require('config');
const e = require('express');
// let db = config.get('mongoURI');

if(process.env.NODE_ENV === 'production'){
    const db = process.env.MONGO_URI
}else{
    const db = config.get('mongoURI')
}


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