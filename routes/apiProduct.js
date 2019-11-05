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

  module.export = router;