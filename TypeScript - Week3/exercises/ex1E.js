const jsonObj = {name: "Anders", age: 22}

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/api/securerandoms') {
        res.setHeader('Content-Type', 'application/json');
        //Return a response with OS-info, using the code implemented in part-a
        res.write(`${JSON.stringify(jsonObj)}`)
        return res.end();
    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/securerandoms</code></p>
    `);
        return res.end();
    }
});
server.on('connection', (sock) => {
    // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
