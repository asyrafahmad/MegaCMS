const express = require('express')

const app = express()
const cors = require("cors")

const db = require('./models')

app.use(cors())

//Router
app.use(express.json())

const usersRouter = require('./routes/Users')
app.use("/authentication", usersRouter)
//Router

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("Server is running on Port 3002")
    })
}).catch(error => console.log(error))