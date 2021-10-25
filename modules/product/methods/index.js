const db = require("../../../models");
const { product } = require('../product.validation');
const logger  = require('../../middleware/logger')

exports.create = async (req, res, next) => {
  const { productName, productPrice, quantity } = req.body;
  try {
    logger.debug({message: "Server Sent A Hello World this is info!", debugId: "1234567890", ipAddress: "123456789SW"});
    logger.error({message: "Error message!", debugId: "123456", ipAddress: "123456789SW"});

    const result = await product.validateAsync(req.body, { abortEarly: false });
    
    await db.Product.create({
      productName,
      productPrice,
      quantity,
    });
    res.status(200).json({ message: "Product saved successfully" });
  } catch (err) {
    return next(err)
  }
};

exports.get = async (req, res) => {
  try {
    const productList = await db.Product.findAll();
    res.status(201).json({ result: productList });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await db.Product.findOne({ where: { id: productId } });
    if (!product)
      return res.status(404).json({ message: "Product doesnot exist" });
    res.status(201).json({ result: product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const result = await product.validateAsync(req.body, { abortEarly: false });
    const { productId } = req.params;
    const { productName, productPrice, quantity } = req.body;
    const productInfo = await db.Product.findOne({ where: { id: productId } });
    if (!productInfo)
      return res.status(404).json({ message: "Product does not exit" });
    const updateProduct = await db.Product.update(
      {
        productName,
        productPrice,
        quantity,
      },
      { where: { id: productId } }
    );
    res.status(201).json({ message: "Product updated successfully" });
  } catch (error) {
    return next(error)
  }
};
