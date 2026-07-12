const express = require("express");
const router = express.Router();
const { getMetrics, createMetric } = require("../controllers/esgController");

router.get("/dashboard", getMetrics);
router.post("/update", createMetric);

module.exports = router;