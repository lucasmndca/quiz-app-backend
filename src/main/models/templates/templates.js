const quiz = {
    question: String,
    answer: String,
    difficulty: String,
    value: Number,
    lang: String,
    createdAt: Date,
    changedAt: Date
}

const user = {
    username: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: Date,
    changedAt: Date
}

module.exports = {
    quiz,
    user
}