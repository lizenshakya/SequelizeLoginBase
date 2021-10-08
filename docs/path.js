const signin = require('./user/signin');
const signup = require('./user/signup');
const getProducts = require('./product/get-all-product');
const getProduct = require('./product/get-product-by-id');
const createProduct = require('./product/create-product');
const updateProduct = require('./product/update-product');

module.exports = {
    paths:{
        '/users/signin':{
            ...signin
        },
        '/users/signup':{
            ...signup
        },
        '/product':{
            ...getProducts,
            ...createProduct
        },
        '/product/{productId}':{
            ...getProduct,
            ...updateProduct,
        }
    }
}