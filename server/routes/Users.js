const express = require('express')
const router = express.Router()
const { Users } = require("../models")
const bcrypt = require('bcrypt')

/* Registration */
router.post("/register", async (req,res) => {
    
    const { username, email, password } = req.body

    // Password encryption
    await bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            email: email,
            password: hash
        });

        res.json("Successfully register new user")
    })
})

module.exports = router