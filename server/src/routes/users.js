const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Welcome to BlackHeart user route!')
})

module.exports = router