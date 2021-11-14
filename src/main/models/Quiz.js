const mongoose = require('mongoose')
const templates = require('./templates/templates')

module.exports = mongoose.model('Quiz', templates.quiz)