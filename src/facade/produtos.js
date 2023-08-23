const dbo = require("../dbo/produtos");
const validation = require("../model/produtos");
const tablename = "produtos";

const get = async () => {
  return await dbo.get(tablename);
};

const create = async (produtos) => {
  const { error } = validation.object.validate(produtos);
  if (error) {
    throw new Error(error.details[0].message);
  }

  const cardId = await dbo.create(tablename, produtos);
  return cardId;
};

module.exports = {
  get,
  create,
};
