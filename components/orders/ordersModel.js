const db = require('../../db');

exports.findAll = async () => {
  const [results] = await db.query('SELECT * FROM orders');
  return results;
};

exports.findOne = async (id) => {
  const [result] = await db.query('SELECT * FROM orders WHERE id=?', id);
  return result;
};

exports.create = async (productId, amount, totalPrice) => {
  const [{ insertId }] = await db.query('INSERT INTO orders(productId, amount, totalPrice) VALUES (?, ?, ?)', [productId, amount, totalPrice]);
  const [result] = await db.query('SELECT * FROM orders WHERE id=?', insertId);
  return result[0];
};
