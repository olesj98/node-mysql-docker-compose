const db = require('../../db');

exports.findAll = async () => {
  const [results] = await db.query('SELECT * FROM products');
  return results;
};

exports.findOne = async (id) => {
  const [result] = await db.query('SELECT * FROM products WHERE id=?', id);
  return result;
};

exports.create = async (name, price, description) => {
  const [{ insertId }] = await db.query('INSERT INTO products(name, price, description) VALUES (?, ?, ?)', [name, price, description]);
  const [result] = await db.query('SELECT * FROM products WHERE id=?', insertId);
  return result[0];
};

exports.update = async (id, name, price, description) => {
  await db.query('UPDATE products SET name=?, price=?, description=? WHERE id=?',
    [name, price, description, id]);
  const [result] = await db.query('SELECT * FROM products WHERE id=?', id);
  return result[0];
};
