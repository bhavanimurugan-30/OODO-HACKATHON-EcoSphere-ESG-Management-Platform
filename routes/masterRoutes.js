const express = require("express");
const router = express.Router();
const { 
  getDepartments, createDepartment, deleteDepartment,
  getCategories, createCategory, deleteCategory 
} = require("../controllers/masterController");

// Dept endpoints
router.get("/departments", getDepartments);
router.post("/departments", createDepartment);
router.delete("/departments/:id", deleteDepartment);

// Category endpoints
router.get("/categories", getCategories);
router.post("/categories", createCategory);
router.delete("/categories/:id", deleteCategory);

module.exports = router;