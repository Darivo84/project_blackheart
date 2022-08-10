const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const authRoute = require('./src/routes/auth')
const userRoute = require('./src/routes/users')
const postRoute = require('./src/routes/posts')
const businessRoute = require('./src/routes/business')

dotenv.config()

mongoose.connect(process.env.MONGO_URL,  { 
    useNewUrlParser: true,
}, () => {
        console.log("Connected to DB")
})

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/posts', postRoute)
app.use('/api/v1/business', businessRoute)

app.listen(4000, () => {
    console.log("Server running on port 4000")
})