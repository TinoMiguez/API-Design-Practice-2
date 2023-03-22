const router = require('express').Router()

router.get('/books', (req, res) => {
    res.status(200).send('API Ok')
})

router.post('/books', (req, res) => {
    res.status(200).json(req.body)
})
module.exports = router