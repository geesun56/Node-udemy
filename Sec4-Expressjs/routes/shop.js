const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));   // do not add slash to enable the path os-free
});


module.exports = router;