const express = require('express')
const routes = express()
const Logger = require('colorful-log').default
const log = new Logger()

routes.get('/', (req, res) => {
    log.info(`Received request from ip ${req.ip}`)
    res.json({ message: 'Welcome' })
})

module.exports = routes