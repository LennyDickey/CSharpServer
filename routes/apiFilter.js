const mysql = require("mysql");
const express = require("express").router;

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

module.exports = router;
