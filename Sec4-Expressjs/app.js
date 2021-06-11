// const http = require('http');

const express = require('express');
const path = require('path');

const app = express();

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');


app.use(express.urlencoded({extended: false})); //parses incoming requests
app.use(express.static(path.join(__dirname, 'public')));    //open public path

app.use(shopRouters);
app.use('/admin', adminData.routes);

//Handle undefined path
app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,  'views', '404.html'))
});

// const server = http.createServer(app);

app.listen(3000);