const Joi = require('@hapi/joi');

const saveSchema = Joi.object({
  email: Joi.string()
    .email()
    .min(3)
    .max(50)
    .required(),
  term: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),
  frequency: Joi
    .number()
    .valid(2, 5, 30)
    .required()
});

const updateSchema = Joi.object({
  email: Joi.string()
    .email()
    .min(3)
    .max(50),
  term: Joi.string()
    .alphanum()
    .min(3)
    .max(50),
  frequency: Joi
    .number()
    .valid(2, 5, 30)
});

module.exports = {
  saveSchema,
  updateSchema
};
