const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const User = require('../models/User')


function initialize(passport){

    const authenticateUser = async (email, password, done) => {
        let user = await User.findOne({email});

        if (user == null) {
            return done(null, false, {message: 'No user with that email'})
        }

        try{
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            }else{
                return done(null, false, {message: 'Improper Credentials'})
            }
        }catch (error) {
            return done(error)
        }
    }

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, authenticateUser))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        let user = await User.findOne({id})

        done(null, user)
    })

}

module.exports = initialize