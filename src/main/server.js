const express = require('express')
const app = express()
const Logger = require('colorful-log').default
const settings = require('./config/settings')
const routes = require('./routes/routes')

const server = async () => {
    const log = new Logger()
    
    await settings.connect()
    settings.config(app)
    settings.setRoutes(app, routes)

    app.listen(settings.port, () => {
        log.info(`Server is running on port ${settings.port}`)
    })
}

// Starts app
server()