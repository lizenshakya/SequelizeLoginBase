
  
'use strict';

(() => {
    const express = require('express');
    const router = express.Router();

    const user = require('../modules/users');
    router.use('/users', user);
    
    const product = require('../modules/product');
    router.use('/product', product);
    module.exports = router;
})();