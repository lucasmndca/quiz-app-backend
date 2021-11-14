const templates = require('../../../main/models/templates/templates')

describe('templates', () => {
    let quiz
    let user

    beforeAll(() => {
        quiz = templates.quiz
        user = templates.user
    })

    test('quiz template should have all mandatory fields', () => {
        expect(quiz.value).not.toEqual(undefined)
        expect(quiz.question).not.toEqual(undefined)
        expect(quiz.lang).not.toEqual(undefined)
        expect(quiz.difficulty).not.toEqual(undefined)
        expect(quiz.createdAt).not.toEqual(undefined)
        expect(quiz.changedAt).not.toEqual(undefined)
    })

    test('every field of quiz template should have the proper type', () => {
        expect(quiz.value.name).toEqual('Number')
        expect(quiz.question.name).toEqual('String')
        expect(quiz.lang.name).toEqual('String')
        expect(quiz.difficulty.name).toEqual('String')
        expect(quiz.createdAt.name).toEqual('Date')
        expect(quiz.changedAt.name).toEqual('Date')
    })

    test('user template should have all mandatory fields', () => {
        expect(user.username).not.toEqual(undefined)
        expect(user.password).not.toEqual(undefined)
        expect(user.name).not.toEqual(undefined)
        expect(user.lastName).not.toEqual(undefined)
        expect(user.email).not.toEqual(undefined)
        expect(user.createdAt).not.toEqual(undefined)
        expect(user.changedAt).not.toEqual(undefined)
    })

    test('every field of user template should have the proper type', () => {
        expect(user.username.name).toEqual('String')
        expect(user.password.name).toEqual('String')
        expect(user.name.name).toEqual('String')
        expect(user.lastName.name).toEqual('String')
        expect(user.email.name).toEqual('String')
        expect(user.createdAt.name).toEqual('Date')
        expect(user.changedAt.name).toEqual('Date')
    })
})