const route = "/user";
const api = require("../api/user");

module.exports = (router) => {
  router.route(route).get(api.get).post(api.create);
};
