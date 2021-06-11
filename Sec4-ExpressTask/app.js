const express = require('express');

const app = express();



app.use('/user', (req,res,next) => {
    console.log('this is the third use')
    res.send('<h1>Show user list</h1>');
})

app.use('/', (req, res, next) => {
    console.log('this is the second use');
    res.send('<h1>Welcome to the NodeJS tutorial</h1>')
})


app.listen(4000);