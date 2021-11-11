const express = require('express')
const Logger = require('colorful-log').default
const log = new Logger()

const port = 8080

const config = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    log.info('App successfully configured')
}

const setRoutes = (app, routes) => {
    app.use(routes)
    log.info('Routes successfully created')
}

module.exports = { config, setRoutes, port }