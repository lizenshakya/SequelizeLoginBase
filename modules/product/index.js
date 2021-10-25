'use strict';

(() => {
    const express = require('express');
    const productRouter = express.Router();

    const { sanitize } = require('../middleware/sanitizer');

    const product = require('./methods');

    productRouter.post('/', sanitize(), product.create );
    productRouter.get('/', product.get );
    productRouter.get('/:productId', product.getById );
    productRouter.put('/:productId', product.update );

    module.exports = productRouter;
})();