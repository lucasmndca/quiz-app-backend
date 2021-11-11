const settings = require('../../main/config/settings')

jest.mock('colorful-log')

describe('config', () => {
    let app
    let routes

    beforeEach(() => {
        app = { use: jest.fn() }
        routes = { get: jest.fn() }
        settings.config = jest.fn(app => app.use(null))
        settings.setRoutes = jest.fn((app, routes) => app.use(routes))
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

    })
})