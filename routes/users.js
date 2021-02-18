const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../models/User');
require('dotenv').config()

// @route       POST api/users
// @desc        Register a user
// @access      Public

router.post('/register', 
    async (req, res) => {

        const { name, email, password, confirmpassword, terms } = req.body;

        try {
            let user = await User.findOne({email});
            if(!terms){
                return res.status(400).json({msg: 'You must accept the terms and conditions and privacy policy'})
            }

            if (user) {
                return res.status(400).json({ msg: 'User already exists'});
            }
            
            if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
                return res.status(400).json({ msg: 'Invalid Email'})
            }

            if(password !== confirmpassword){
                return res.status(400).json({ msg: 'Passwords do not match'})
            }

            if(password.length > 20 || password.length < 6) {
                return res.status(400).json({msg: 'Password must be between 6 and 20 characters'})
            }

            user = new User({name, email, password});

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            res.send('User Created')

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

});

router.post('/login', passport.authenticate('local'), (req, res) => {res.send(`${req.body}`)})

module.exports = router;