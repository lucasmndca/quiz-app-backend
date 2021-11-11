const express = require('express')
const app = express()
const Logger = require('colorful-log').default
const log = new Logger()

const settings = require('./config/settings')
const routes = require('./routes/routes')

// Express configurations
settings.config(app)

// Creates routes
settings.setRoutes(app, routes)

// Starts server
app.listen(settings.port, () => {
    log.info(`Server is running on port ${settings.port}`)
})