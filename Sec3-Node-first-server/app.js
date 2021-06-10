const http = require('http'); // way to import file/package in nodejs
// function rqListener(req, res){   // Way 1: define listener and pass it to createServer Method

const routes = require('./routes');

// http.createServer(rqListener)

/* 
1) created a server and stored in a variable
2) listen method executes a server 
3) the server listens to the port 3000 */

console.log(routes.someText)
const server = http.createServer(routes.handler);

//to shut down the server do process.exit();
server.listen(3000)     