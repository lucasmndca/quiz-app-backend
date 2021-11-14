const express = require('express')
const Logger = require('colorful-log').default
const userRoutes = require('./user/userRoutes')
const quizRoutes = require('./quiz/quizRoutes')

const routes = express()
const log = new Logger()

routes.get('/', (req, res) => {
    log.info(`Received request from ip ${req.ip}`)
    res.json({ message: 'Welcome' })
})

routes.use('/users', userRoutes)
routes.use('/quizzes', quizRoutes)

module.exports = routes