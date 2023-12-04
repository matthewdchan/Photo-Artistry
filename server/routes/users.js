// load packages
const express = require('express');
const userrouter = express.Router();
var bodyParser = require("body-parser");
const User = require('../models/User');

// auth packages
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const { hasFormSubmit } = require('@testing-library/user-event/dist/utils');

/* SIGN UP ROUTE */
userrouter.post("/signup", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Error: not all fields filled
        if(!email || !username || ! password) {
            return res.status(400).json({ msg: "Please enter all the fields."})
        }

        // Error: password length too small
        if(password.length < 6) {
            return res.status(400).json({ msg: "Password should be at least 6 characters."})
        }

        // Error: cannot sign up if someone with that email already exists in the database
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ msg: "User with the same email already exists."})
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({ email, username, password : hashedPassword})

        // Save to database
        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    }
    catch (err) {
        return res.status(500).json({ error: err.message }) // all other possible errors
    }
});

/* LOGIN ROUTE */
userrouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Error: not all login fields filled
        if(!username || !password){
            return req.status(400).json({ msg: 'Please enter all fields.' });
        }

        const user = await User.findOne({ username });
        // Error : no user found for login
        if(!user) {
            return res.status(400).json({ msg: 'User with this username does not exist.' });
        }

        // Compare user entered "password" to encrypted password in system
        const isMatch = await bcryptjs.compare(password, user.password);

        // Error: incorrect password
        if(!isMatch){
            return res.status(400).send({ msg: 'Incorrect password.' });
        }

        // Create a token so we can pesist user token in the frontend
        const token = jwt.sign({id : user._id}, 'passwordKey');
        res.json({ token, user: { id: user._id, username : user.username } });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
});

/* VALIDATE TOKEN */
userrouter.post('/tokenIsValid', async (req, res) =>  {
    try {
        // Check: does the token exist
        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        // Check: is the token invalid or expired
        const verified = jwt.verify(token, "passwordKey");
        if(!verified) return res.json(false);

        // Check: does the user exist
        const user = await User.findById(verified.id);
        if(!user) return res.json(false);

        // Else, the token is valid
        return res.json(true);
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
});

// GET request to get a user's username and token
userrouter.get('/', auth, async (req, res) =>  {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id : user._id,
    })
});


// Export
module.exports = userrouter;