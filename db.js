const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const promisePool = pool.promise();

// Create and populate a table for products in the database if it doesn't exist at application start
(async function createTable() {
  const tableQuery = `CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(8,2) NOT NULL,
        description VARCHAR(255))`;

  const tableData = `INSERT INTO products (
      name,
      price,
      description
  )
  VALUES
      (
          'Product 1',
          123,
          'test product nr.1'
      ),
      (
          'Product 2',
          1000,
          'test product nr.2'
      ),
      (
          'Product 3',
          1001,
          'test product nr.3'
      )`;

  await promisePool.query(tableQuery);
  await promisePool.query(tableData);
}());

module.exports = promisePool;
