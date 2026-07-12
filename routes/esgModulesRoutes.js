const express = require("express");
const router = express.Router();
const {
  getCarbonTx, createCarbonTx,
  getCsr, createCsr,
  getGov, createGov,
  getNotifications
} = require("../controllers/esgModulesController");

router.route("/carbon").get(getCarbonTx).post(createCarbonTx);
router.route("/csr").get(getCsr).post(createCsr);
router.route("/governance").get(getGov).post(createGov);
router.route("/notifications").get(getNotifications);

module.exports = router;