require('./config/database')
const server = require('./config/server.js')
require('./src/api/todo/todo')
require('./config/routes')(server)
