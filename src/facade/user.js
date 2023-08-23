const dbo = require("../dbo/user");
const validation = require("../model/user");
const tablename = "user";

const get = async () => {
  return await dbo.get(tablename);
};

const create = async (user) => {
  const { error } = validation.object.validate(user);
  if (error) {
    throw new Error(error.details[0].message);
  }

  const cardId = await dbo.create(tablename, user);
  return cardId;
};

module.exports = {
  get,
  create,
};
