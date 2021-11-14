const userRoutes = require('../../../main/routes/user/userRoutes')

describe('userRoutes', () => {
    test('userRoutes is not null or undefined', () => {
        expect(userRoutes).not.toEqual(null)
        expect(userRoutes).not.toEqual(undefined)
        expect(typeof userRoutes).toEqual('function')
    })
})