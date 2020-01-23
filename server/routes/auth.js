var express = require("express");
var router = express.Router();

/* GET basic service test dummy end-point */
router.get("/", (req, res) => {
  res.status(200).send();
});

module.exports = router;
