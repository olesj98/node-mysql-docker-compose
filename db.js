const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const promisePool = pool.promise();

// Create and populate a tables in the database if doesn't exist at application start
(async function createTable() {
  // const dropProductTable = 'DROP TABLE orders';

  const tableProductsQuery = `CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(8,2) NOT NULL,
        description VARCHAR(255),
        available TINYINT DEFAULT 0
        )`;

  const tableOrdersQuery = `CREATE TABLE IF NOT EXISTS orders (
        id INT PRIMARY KEY AUTO_INCREMENT,
        productId INT,
        amount INT,
        totalPrice DECIMAL(8,2) NOT NULL,
        orderType VARCHAR(8),
        FOREIGN KEY (productId) REFERENCES products(id)
        )`;

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

  // await promisePool.query(dropProductTable);
  await promisePool.query(tableProductsQuery);
  await promisePool.query(tableOrdersQuery);
  await promisePool.query(tableData);
}());

module.exports = promisePool;
