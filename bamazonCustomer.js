// Declaring necessary dependancies
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connecting to the localhost where JS and SQL are saved
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	// Host's username
	user: "root",
	// Host's passwoord
	passwoord: "",
	database: "bamazon"
});

// Connecting to the host database to pull and display items with id, product name, and price
connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	var query = "SELECT item_id, product_name, price FROM products";
	connection.query(query, function (err) {
		if (err) throw err;
	});
	displayProducts();
}); 

function displayProducts() {
	var query = "SELECT item_id, product_name, price FROM products";
	connection.query(query, function (err, res){


		inquirer.prompt([
			{
			name: "productList",
			type: "list",
			choices: function() {
				var choiceArray = [];
				for (var i = 0; i < res.length; i++) {
					choiceArray.push(`ID: ${res[i].item_id} | Product: ${res[i].product_name} | Price: ${res[i].price}`);
				}
				return choiceArray;
			},
			message: "What product would you like to purchase?" 
			}, {

			name: "purchase",
			type: "input",
			message: "Type the product's ID to begin running order."	

			}, {
		
			name: "number",
			type: "input",
			message: "How many units would you like?"
			}
	 	/*{
			name: "anythingElse",
			message: "Is there anything else?",
			type: "confirm"
		}*/
		]).then(function(answers) {
			//Returning the inputs from prompt to actual integers
			var item = parseInt(answers.purchase);
			var merch = parseInt(answers.number);
			
			//Letting buyer know their order is executing
			console.log(`Running order = ID: ${item} - Quantity: ${merch}`);
			//console.log("Press ctrl-c to end connection");
			
			//Finding a match of input ID from products table 
			var query1 = "SELECT * FROM products WHERE ?";
			
			connection.query(query1, {item_id: item}, function(error, data) {
							if(error) throw error;
							
							//The code below will show data if the item ID is found
							//var dataP = JSON.stringify(data);
							//console.log(`Data = ${dataP}`);

							//'data.length' needs to return a number greater then 0 if product exists
							if (data.length === 0) {
								console.log("ERROR!: ID entered invalid. Please try again");
								displayProducts();
							} else {
								//Dump the item's data into a variable and give it an index of 0
								var merchData = data[0];
								//console.log(`merchData = ${JSON.stringify(merchData)}`);
								//console.log(`merchData.stock_quantity = ${merchData.stock_quantity}`);
								if (merch <= merchData.stock_quantity) {
									var updateStock = "UPDATE products SET stock_quantity = " + (merchData.stock_quantity - merch) + " WHERE item_id = " + item;

									connection.query(updateStock, function(err, data) {
										if (err) throw err;
										console.log(`Success! Your order has been placed.`);
										console.log("\n Your total: $" + (merchData.price * merch));
										console.log(`========================`);
										console.log("Thanks for shopping with us! Come back soon!");
										connection.end();
									});
								} else {
									console.log(`Looks like we can't fulfill your order with our stock.`);
									console.log(`Go ahead and modify your order to try again.`);
									displayProducts();

								}
							}
			});
			
		});
	});	
} 







