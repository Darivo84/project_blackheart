const router = require('express').Router()
const User = require('../models/User')

// Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router