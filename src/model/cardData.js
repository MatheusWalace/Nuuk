const Joi = require("joi");

const object = Joi.object().keys({
  id: Joi.number(),
  card_number: Joi.string().length(16).required(),
  expiration_date: Joi.number().integer().required(),
  cvv: Joi.number().integer().required(),
  cpf: Joi.number().integer().required(),
  card_name: Joi.string().required(),
});

module.exports = {
  object,
};
