require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const port = 8080

const config = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    console.log('App successfully configured')
}

const setRoutes = (app, routes) => {
    app.use(routes)
    console.log('Routes successfully created')
}

const connect = async () => {
    try {
        await mongoose.connect(`${process.env.DB_HOST_BASE}${process.env.DB_USER}:${process.env.DB_PSWD}${process.env.DB_HOST_ROUTE}`)
        console.log('Connected to the database.')
    } catch (error) {
        console.error('Could not connect to the database.')
    }
}

const setCors = (app) => {
    const options = {
        origin: 'http://127.0.0.1:5500',
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        preflightContinue: false,
        allowedHeaders: ['Content-Type', 'Accept'],
        optionsSuccessStatus: 200
    }
    app.use(cors(options))
}

module.exports = {
    config,
    setRoutes,
    setCors,
    connect,
    port
}