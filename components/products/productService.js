const { products } = require("./productDataSource.json");
const connection = require("./productRepository");

exports.getAll = (callback) => {
  products.getAll(callback);
};

exports.getByProductId = (productId) => {
  return products.find((product) => product.productId === productId);
};
