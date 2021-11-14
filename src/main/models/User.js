const mongoose = require('mongoose')
const templates = require('./templates/templates')

module.exports = mongoose.model('User', templates.user)