const productModel = require('./productsModel');

const getProducts = async (req, res) => {
  try {
    const { page } = req.query;
    const products = await productModel.findAll(page);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addProducts = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await productModel.create(name, price, description);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel.findOne(req.params.id);
    if (product != null) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'product does not exist' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await productModel.update(req.params.id, name, price, description);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  addProducts,
  getProductById,
  updateProductById,
};
