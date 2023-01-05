const express = require('express')
const router = express.Router()
const { Users } = require("../models")
const bcrypt = require('bcrypt')

const { validateToken } = require("../middlewares/AuthMiddleware")
const { sign } = require("jsonwebtoken")

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

/* Login Validation */
router.post('/login', async (req,res) => {

    const {email, password} = req.body

    //TODO: password
    const user = await Users.findOne({ where: {email: email}})

    if(!user) res.json({error: "User doesn't exist"})

    bcrypt.compare(password, user.password).then((match) => {

        if(!match) res.json({error: "Wrong Password!"})

        // For User Session Token (generate JWT access token)
        const accessToken = sign({email: user.email, username: user.username, id: user.id}, "ImportantSecretToken")

        res.json({Response: "You logged In", Token: accessToken, email: email, username: user.username, id: user.id})
    })
})

module.exports = router