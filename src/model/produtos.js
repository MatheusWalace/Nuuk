const Joi = require("joi");

const object = Joi.object().keys({
  id: Joi.string(),
  nome: Joi.string().required(),
  usuario_id: Joi.string().required(),
  preco: Joi.string().required(),
  vendido: Joi.string().required(),
  descricao: Joi.string().required(),
  fotos: Joi.string().required(),
});

module.exports = {
  object,
};
