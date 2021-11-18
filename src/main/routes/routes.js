const express = require('express')
const userRoutes = require('./user/userRoutes')
const quizRoutes = require('./quiz/quizRoutes')

const routes = express()

routes.get('/', (req, res) => {
    console.log(`Received request from ip ${req.ip}`)
    res.json({ message: 'Welcome' })
})

routes.use('/users', userRoutes)
routes.use('/quizzes', quizRoutes)

module.exports = routes