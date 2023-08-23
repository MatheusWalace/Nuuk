const facade = require("../facade/produtos");

const get = async (req, res) => {
  const result = await facade.get();
  return res.status(200).send(result);
};

const create = async (req, res) => {
  try {
    const produtos = req.body;
    const cardId = await facade.create(produtos);
    return res
      .status(201)
      .json({ id: cardId, message: "Cartão criado com sucesso." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  get,
  create,
};
