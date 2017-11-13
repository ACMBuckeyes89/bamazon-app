/* Creating a new databse with the name "bamazon*/
CREATE DATABASE bamazon; 

/* Creating a new table named "products" with 5 columns */
CREATE TABLE products(
	item_id INT NOT NULL,
	product_name VARCHAR(60) NOT NULL, 
	department_name VARCHAR(60) NOT NULL,
	price INT NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

/* Inserting 10 products into the products table */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "NIKE Tiempo 94", "Sneakers", 100.00, 20); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "AIR JORDAN 1", "Sneakers", 120.00, 16); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "PUMA Suede Classic", "Sneakers", 89.99, 11);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "Adidas Originals Stan Smith", "Sneakers", 82.00, 14); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "B.A.P.E. Christo t-shirt", "Clothing", 26.00, 9); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "G-Star RAW 3301 Slim Jeans", "Clothing", 101.00, 14);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "DIESEL W-Deacon Jacket", "Clothing", 248.00, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "Rick Owens Belt", "Accessories", 133.00, 9); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "Alexander Wang Razo Backpack", "Accessories", 106.00, 12); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (RAND()*(3000-1000+1)+100, "Kenzo Tiger Socks", "Accessories", 38.00, 13);