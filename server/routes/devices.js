const express = require("express");
const router = express.Router();
const mockData = require("../public/mockData/mockData");

/* GET devices listing. */
router.get("/", (req, res) => {
  res.status(200).send(mockData);
});

/* GET single device by ID. */
router.get("/:id", (req, res) => {
  const {id} = req.params
  console.log('Searching for device by id....', id, req.params)
  const device = mockData.find((data) => {
    return data.id === parseInt(id)
  })

  if (!device) res.status(404).send();
  res.status(200).send(device);
});

module.exports = router;
module.exports = router;
