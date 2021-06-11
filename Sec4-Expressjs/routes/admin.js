const express = require('express');
const path = require('path')
const router = express.Router();
const rootDir = require('../utils/path');

//  /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In middleware');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});


// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {   // we only want to limit this block to be executed with POST request
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;