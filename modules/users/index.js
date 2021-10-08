'use strict';

(() => {
    const express = require('express');
    const userRouter = express.Router();

    const user = require('./methods');
    //userRouter.get('/', user.get);

    userRouter.post('/signup', user.signup );
    userRouter.post('/signin', user.signin );
    module.exports = userRouter;
})();