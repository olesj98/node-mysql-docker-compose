const orderModel = require('./ordersModel');

const addOrder = async (req, res) => {
  try {
    const { productId, amount, totalPrice } = req.body;
    const order = await orderModel.create(productId, amount, totalPrice);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addOrder,
};
