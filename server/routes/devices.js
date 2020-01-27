const express = require("express");
const router = express.Router();
const {devices: {fetch: FETCH_CODES, list: LIST_CODES}} = require('../api-codes.json')
const mockData = require("../public/mockData/mockData");

/**
 * Devices: LIST - Get a list of Devices with optional result limit and pagination.
 * HTTP GET
 * Pagination query paramters are zero-bound.
 * Query Params:
 * - @param limit The result limit. Can be combined with `page for pagination.
 * - @param page The page of result set to return. Must be combined with `limit` for pagination.
 */
router.get("/", (req, res) => {
  const {page: queryPage, limit: queryLimit} = req.query
  const limit = parseInt(queryLimit)
  const page = parseInt(queryPage)
  let devices;

  // uses full pagination
  if (queryPage && queryLimit) {
    const beginIndex = page * limit;
    const endIndex = beginIndex + limit

    if (limit < 0) {
      return res.status(400).send({message: LIST_CODES.pagination.range_error})
    }

    devices = mockData.slice(beginIndex, endIndex);

  // if the client is attempting to use pagination but has no limit set, report the error
  } else if (queryPage && !queryLimit) {
    return res.status(400).send({message: LIST_CODES.pagination.misuse})

  // no pagination, just use limit to cap results
  } else if (!queryPage && queryLimit) {
    devices = mockData.slice(0, limit);

  // otherwwise send it all
  } else {
    devices = mockData;
  }

  if (devices.length === 0) res.status(404).send({message: LIST_CODES.empty});

  res.status(200).send({
    count: devices.length,
    total: mockData.length,
    pages: Math.ceil(mockData.length / limit),
    devices
  });
});

/**
 * Devices: FETCH - Fetch single Device by ID.
 * HTTTP GET
 * Query Params:
 * - @param id The ID of the Device to retrieve.
 */
router.get("/:id", (req, res) => {
  const {id} = req.params;
  const device = mockData.find((data) => data.id === parseInt(id));

  if (!device) res.status(404).send({message: FETCH_CODES.empty});
  res.status(200).send(device);
});

module.exports = router;
module.exports = router;
