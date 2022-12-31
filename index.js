require('dotenv').config()
const server = require('./api/server.js');

const port = process.env.PORT || 5000
const host = process.env.HOSTNAME || 'http://localhost'

server.listen(port, () => {
     console.log(`\nAPI is ACTIVE on ${host}:${port}\n`)
})