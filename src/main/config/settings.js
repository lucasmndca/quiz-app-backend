require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
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

const connect = async () => {
    try {
        await mongoose.connect(`${process.env.DB_HOST_BASE}${process.env.DB_USER}:${process.env.DB_PSWD}${process.env.DB_HOST_ROUTE}`)
        log.info('Connected to the databse.')
    } catch (error) {
        log.error('Could not connect to the database.')
    }
}

module.exports = {
    config,
    setRoutes,
    connect,
    port
}