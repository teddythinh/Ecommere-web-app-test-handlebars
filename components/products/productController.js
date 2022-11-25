const productService = require("./productService");

exports.list = (req, res) => {
  productService.getAll((err, products) => {
    console.log(products);
    res.render("products/list", products);
  });
};

exports.details = (req, res) => {
  const productId = req.params.productId;
  // validate
  // ...

  const product = productService.getByProductId(productId);
  res.render("products/details", product);
};
