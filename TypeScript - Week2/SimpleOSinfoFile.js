const os = require('os');

let osObj = {
    Opgave: "Opgave 1",
    platform: os.platform(),
    osType: os.type(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    EOL: '\r\n'
}


module.exports.osObj = osObj ;

