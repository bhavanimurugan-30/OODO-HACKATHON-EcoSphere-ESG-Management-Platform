const express = require("express");
const router = express.Router();
const {
  getEmployees, createEmployee,
  getPolicies, createPolicy,
  getFactors, createFactor
} = require("../controllers/esgMasterController");

// Employee Endpoints
router.get("/employees", getEmployees);
router.post("/employees", createEmployee);

// ESG Policy Endpoints
router.get("/policies", getPolicies);
router.post("/policies", createPolicy);

// Emission Factor Endpoints
router.get("/factors", getFactors);
router.post("/factors", createFactor);

module.exports = router;