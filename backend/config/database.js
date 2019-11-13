const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/todoApp'
mongoose.Promise = global.Promise

module.exports = mongoose.connect(url, {useNewUrlParser: true})

