'use strict';

(() => {
    const express = require('express');
    const productRouter = express.Router();

    const product = require('./methods');

    productRouter.post('/', product.create );
    productRouter.get('/', product.get );
    productRouter.get('/:productId', product.getById );
    productRouter.put('/:productId', product.update );

    module.exports = productRouter;
})();