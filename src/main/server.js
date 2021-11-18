const express = require('express')
const app = express()
const settings = require('./config/settings')
const routes = require('./routes/routes')

const server = async () => {
    await settings.connect()
    settings.setCors(app)
    settings.config(app)
    settings.setRoutes(app, routes)

    app.listen(settings.port, () => {
        console.log(`Server is running on port ${settings.port}`)
    })
}

// Starts app
server()
