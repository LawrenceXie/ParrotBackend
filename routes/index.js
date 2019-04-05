const paymentApi = require("./payment");
const orderApi = require("./order");

const configureRoutes = app => {
  paymentApi(app);
  orderApi(app);
};

module.exports = configureRoutes;
