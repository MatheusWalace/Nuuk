const db = require("../config/db");

module.exports = {
  get: async (tableName) => {
    try {
      const result = await db(tableName).select();
      return result;
    } catch (error) {
      // console.log(error);
      return [];
    }
  },
  create: async (tableName, data) => {
    try {
      const [id] = await db(tableName).insert(data);
      return id;
    } catch (error) {
      // console.log(error);
      throw new Error("Erro ao criar registro no banco de dados.");
    }
  },
};
