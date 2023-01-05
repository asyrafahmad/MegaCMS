const express = require('express')
const cors = require("cors")

const app = express()

const db = require('./models')

app.use(cors())

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("Server is running on Port 3002")
    })
}).catch(error => console.log(error))