
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/'){

        res.write(`<html>`);
        res.write('<head><title>Section 3 - Assignment1</title></head>');
        res.write('<body><h1>Hello World! This is the complete guide for NodeJS</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>');
    
        return res.end();
    }

    if(url === '/users'){
        res.write(`<html>`);
        res.write('<head><title>Section 3 - Assignment1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
    
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];    
        req.on('data', (dat) => {
            body.push(dat)
        });
        return req.on('end', () => {
            const buffered = Buffer.concat(body).toString();
            const message = buffered.split('=')[1];

            console.log(message);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        })
        
    }
    
    
    
}

module.exports ={
    Handler : requestHandler
}