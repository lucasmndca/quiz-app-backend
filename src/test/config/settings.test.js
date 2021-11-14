const settings = require('../../main/config/settings')
const mongoose = require('mongoose')

jest.createMockFromModule('colorful-log')
jest.createMockFromModule('mongoose')

describe('config', () => {
    let oldEnv = process.env
    let app
    let routes

    beforeEach(() => {
        app = { use: jest.fn() }
        routes = { get: jest.fn() }
        settings.config = jest.fn(app => app.use(null))
        settings.setRoutes = jest.fn((app, routes) => app.use(routes))
        settings.connect = jest.fn(async () => await mongoose.connect(`${process.env.DB_HOST_BASE}${process.env.DB_USER}:${process.env.DB_PSWD}${process.env.DB_HOST_ROUTE}`))
        mongoose.connect = jest.fn()
    })

    afterAll(() => {
        process.env = oldEnv
    })

    describe('settings.js', () => {
        test('port should exist', () => {
            expect(settings.port).not.toBe(null)
            expect(settings.port).not.toBe(undefined)
        })

        test('should configure express', () => {
            settings.config(app)
            expect(app.use).toHaveBeenCalled()
            expect(app.use).not.toThrow()
        })

        test('should set routes', () => {
            settings.setRoutes(app, routes)
            expect(app.use).toHaveBeenCalledWith(routes)
            expect(app.use).not.toThrow()
        })

        test('should connect to mongodb', async () => {
            const spy = jest.spyOn(mongoose, 'connect')
            process.env.DB_HOST_BASE = 'fakedb+srv://'
            process.env.DB_HOST_ROUTE = '@mycluster'
            process.env.DB_USER = 'admin'
            process.env.DB_PSWD = 'superSecurePassword123'

            await settings.connect()

            expect(settings.connect).not.toThrow()
            expect(spy).toHaveBeenCalledWith('fakedb+srv://admin:superSecurePassword123@mycluster')
            expect(spy).not.toThrow()
        })

    })
})