const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/order', (req,res,next) => {
    console.log('order')
    res.sendFile(path.join(__dirname, '../', 'views', 'order.html'));
})

router.post('/order', (req,res,next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;