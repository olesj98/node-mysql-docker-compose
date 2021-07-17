const { findOne } = require('../components/products/productsModel');

const requestValidator = async (req, res, next) => {
  try {
    const { productId, amount, totalPrice } = req.body;
    if (!productId || !amount || !totalPrice) {
      next(new Error('Wrong request body.'));
    }
    const [product] = await findOne(productId);
    const totalCalculatedPrice = product.price * amount;
    if (totalCalculatedPrice !== totalPrice) {
      next(new Error('Oops, price does not match.'));
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  requestValidator,
};
