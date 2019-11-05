const mysql = require("mysql");
const express = require("express").router;

router.get("/", (req, res) => {
  res.sendFile("client/public/index.html", { root: __dirname });
});
module.export = router;
