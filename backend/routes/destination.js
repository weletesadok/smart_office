const express = require("express");
const router = express.Router();
const { uploadFiles } = require("../middlewares/uploadFiles");
const {
  createDestination,
  updateDestination,
  getDestinationById,
  getAllDestinations,
  deleteDestination,
  searchCustom
} = require("./../controllers/destination");

router.route("/")
  .post(uploadFiles, createDestination)
  .get(getAllDestinations);
router.route("/search").get(searchCustom)

router.route("/:destinationId")
  .put(uploadFiles, updateDestination)
  .get(getDestinationById)
  .delete(deleteDestination);

module.exports = router;
