const express = require('express');
// const connectDB = require('./config/db');
const path = require('path');

// const app = express()

// connectDB()

app.use(express.json({ extended: false}));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend','build','index.html')))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))