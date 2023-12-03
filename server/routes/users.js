// load packages
const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const User = require('../models/User');

// auth packages
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { hasFormSubmit } = require('@testing-library/user-event/dist/utils');

/* SIGN UP ROUTE */
router.post("/signup", async (req, res) => {
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






// export router
module.exports(router);