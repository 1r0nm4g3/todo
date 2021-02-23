const express = require('express');
const session = require('express-session')
const connectDB = require('./config/db');
const path = require('path');
const passport = require('passport')
const MongoStore = require('connect-mongo').default
require('dotenv').config()

const initializePassport = require('./config/passport');
const { connection } = require('mongoose');
initializePassport(passport)

const app = express()

connectDB()

app.use(session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI, collection: 'sessions'}),
    cookie: {
        maxAge: 1000*60*60*24
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json({ extended: false}));

// Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/listItems', require('./routes/listItems') )
app.use('/api/list', require('./routes/list'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend','build','index.html')))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))