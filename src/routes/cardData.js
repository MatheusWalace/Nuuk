const route = "/cardData";
const api = require("../api/cardData");

module.exports = (router) => {
  router.route(route).get(api.get).post(api.create);
};
