const express = require('express');
const router = express.Router();
const path = require('path');

const products = [];

router.get('/order', (req,res,next) => {
    console.log('order')
    res.sendFile(path.join(__dirname, '../', 'views', 'order.html'));
})

router.post('/order', (req,res,next) => {
    products.push({title: req.body.title});
    res.redirect('/')
})

module.exports = {
    routes: router,
    products : products
}