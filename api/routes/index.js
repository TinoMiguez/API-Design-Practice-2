const router = require('express').Router()
const bookRouter = require('./book.router')
const userRouter = require('./user.router')


router.use('/books', bookRouter)
router.use('/books', userRouter)

module.exports = router