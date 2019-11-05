const mysql = require("mysql");
const express = require("express").router;

app.get("/contact", (req, res) => {
  connection.query("SELECT * FROM Contact", function(err, data) {
    res.send(data);
    console.log(data);
  });
});

module.exports = router;
