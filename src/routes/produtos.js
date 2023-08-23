const route = "/produto";
const api = require("../api/produtos");

module.exports = (router) => {
  router.route(route).get(api.get).post(api.create);
};
