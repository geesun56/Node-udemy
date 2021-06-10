const http = require('http');
const routes = require('./routes');

/** List of tasks
 * (1) Spin up a Node.js server on Port 3000
 * (2) Handle two Routes - '/' and '/users'
 * (3) Add a form with a 'username' input and submit POST req to '/create-user'
 * (4) Add the '/create-user' route and parse the incoming data
 */


const server = http.createServer(routes.Handler);
server.listen(3000);


