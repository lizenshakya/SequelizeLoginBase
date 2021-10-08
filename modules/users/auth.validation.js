const Joi = require("joi");

const signin = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().required(),
});

const signup = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  role: Joi.string(),
  password: Joi.string().required(),
});

module.exports = {
  signin,
  signup,
};
