const routes = require('../../main/routes/routes')

describe('routes', () => {
    describe('routes.js', () => {

        test('routes module is not empty', () => {
            expect(routes).not.toEqual(null)
            expect(routes).not.toEqual(undefined)
            expect(typeof routes).toEqual('function')
        })
    })
})