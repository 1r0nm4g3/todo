const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const passport = require('passport')
const cookieSession = require('cookie-session')

const initializePassport = require('./config/passport');
const { allowedNodeEnvironmentFlags } = require('process');
initializePassport(passport)

const app = express()
const cookieKey = process.env.COOKIE_KEY

connectDB()

app.use(cookieSession({
    maxAge: 24 * 60 * 60,
    keys: [cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json({ extended: false}));

// Routes
app.use('/api/users', require('./routes/users'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend','build','index.html')))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))