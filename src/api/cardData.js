const facade = require("../facade/cardData");

const get = async (req, res) => {
  const result = await facade.get();
  return res.status(200).send(result);
};

const create = async (req, res) => {
  try {
    const cardData = req.body; // Assumindo que os dados do cartão estão no corpo da solicitação
    const cardId = await facade.create(cardData);
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
