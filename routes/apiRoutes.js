const mysql = require("mysql")
const express = require("express").router

router.get("/product", (req, res) => {
    connection.query(
      "SELECT Product.*, Price.amount FROM Product LEFT JOIN Price ON (Product.Price_id = Price.id)",
      function(err, data) {
        res.send(data);
        //   console.log(data);
      }
    );
  });
 router.get("/contact", (req, res) => {
    connection.query("SELECT * FROM Contact", function(err, data) {
      res.send(data);
      console.log(data);
    });
  });
  
  router.get("/product/:query", (req, res) => {
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
  
  router.get("/productfilter/:query", (req, res) => {
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

  module.exports = router;