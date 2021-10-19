const Joi = require("joi");

const signin = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().required(),
});

const signup = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `Name field should not be empty'`,
    "any.required": `"Name" is a required field`
  }), 
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }).required().messages({
    "string.empty": `Email should not be empty'`,
    'any.required': `Email is a required field`
  }),
  role: Joi.string(),
  password: Joi.string().required().messages({
    'any.required': `Password is a required field`
  }),
});

module.exports = {
  signin,
  signup,
};
