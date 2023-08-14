const dbo = require("../dbo/cardData");
const validation = require("../model/cardData");
const tablename = "cardData";

const get = async () => {
  return await dbo.get(tablename);
};

const create = async (cardData) => {
  const { error } = validation.object.validate(cardData);
  if (error) {
    throw new Error(error.details[0].message);
  }

  const cardId = await dbo.create(tablename, cardData);
  return cardId;
};

module.exports = {
  get,
  create,
};
