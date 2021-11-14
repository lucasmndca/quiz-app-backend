const quizRoutes = require('../../../main/routes/quiz/quizRoutes')

describe('quizRoutes', () => {
    test('quizRoutes is not null or undefined', () => {
        expect(quizRoutes).not.toEqual(null)
        expect(quizRoutes).not.toEqual(undefined)
        expect(typeof quizRoutes).toEqual('function')
    })
})