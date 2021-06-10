const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;


    if(url === '/'){
        res.write(`<html>`);
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="userinput"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
            // console.log(chunk);
        }); // on function enables a server to listen to certain event
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',  message, (err) => {
                res.statusCode = 302;  
                res.setHeader('Location', '/'); // want to make sure that 3lines to be executed once we done with the file write 
                return res.end();
            }); // synchronous mode - block process until this completed
        
        })
    
        /** The req.on method will add eventlistener from the req 
         * To make the event happen, we need to give some time to be executed
         * That's why we need a call back response below
         * Asnchornous execution!
        */
    }
    
    res.setHeader('Content-Type', 'text-html');
    
    res.write(`<html>`);
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my NodeJS server</h1></body>');
    res.write('</html>');
    
     return res.end();
};


module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};    // nodeJS knows request Handler will be exported (registering my function)
