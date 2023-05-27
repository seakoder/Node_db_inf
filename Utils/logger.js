const bunyan = require('bunyan');
let logger = bunyan.createLogger(
    {
        name: 'newbase',
        streams:
        [{
            path: './logs/first.log',
        },
        {
            stream: process.stdout
        }]
    })

module.exports = logger;