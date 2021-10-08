const Joi = require("joi");

const product = Joi.object({
  productName: Joi.string().required(), 
  productPrice: Joi.number(), 
  quantity: Joi.number().integer()
});

module.exports = {
  product
};
