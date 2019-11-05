// importing in all of mt middleware and 

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql");
var morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv").config();

// const apiRoutes = require("./routes/apiRoutes");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  // db port
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "ecom_data"
});

// Define middleware here
app.use(helmet());

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Use apiRoutes
// router.use("/api", apiRoutes);
// app.use("/api/product", apiProduct);

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("/", (req, res) => {
  res.sendFile("client/public/index.html", { root: __dirname });
});

// excutes a query to join the price and product table, then grabs all products
app.get("/product", (req, res) => {
  connection.query(
    "SELECT Product.*, Price.amount FROM Product LEFT JOIN Price ON (Product.Price_id = Price.id)",
    function(err, data) {
      res.send(data);
      //   console.log(data);
    }
  );
});
app.get("/contact", (req, res) => {
  connection.query("SELECT * FROM Contact", function(err, data) {
    res.send(data);
    console.log(data);
  });
});

app.get("/product/:query", (req, res) => {
  let item = req.params.query;
  connection.query(
    "SELECT Product.*, Price.amount FROM Product LEFT JOIN Price ON (Product.Price_id = Price.id) ",
    [item],
    function(err, data) {
      res.json(data);
      console.log(data);
    }
  );
});

app.get("/productfilter/:query", (req, res) => {
  let price = req.params.query;
  connection.query(
    "SELECT Product.*, Price.amount FROM Product LEFT JOIN Price ON (Product.Price_id = Price.id) WHERE Price.amount = ?",
    [price],
    function(err, data) {
      res.json(data);
      console.log(data);
    }
  );
});
app.get("/api/productinvoice/:query", (req, res) => {
    connection.query("SELECT * FROM Contact", function(err, data) {
      res.send(data);
      console.log(data);
    });
  });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;
