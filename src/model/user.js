const Joi = require("joi");

const object = Joi.object().keys({
  id: Joi.number(),
  email: Joi.string().required(),
  nome: Joi.string().required(),
  senha: Joi.string().required(),
  rua: Joi.string().required(),
  cep: Joi.string().required(),
  numero: Joi.string().required(),
  estado: Joi.string().required(),
  cidade: Joi.string().required(),
});

module.exports = {
  object,
};
