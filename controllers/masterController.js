const Department = require("../models/Department");
const Category = require("../models/Category");

// === DEPARTMENT CRUD ===
exports.getDepartments = async (req, res) => {
  const depts = await Department.find();
  res.status(200).json({ success: true, data: depts });
};

exports.createDepartment = async (req, res) => {
  const newDept = new Department(req.body);
  await newDept.save();
  res.status(201).json({ success: true, message: "Department Created!", data: newDept });
};

exports.deleteDepartment = async (req, res) => {
  const deleted = await Department.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: "Not Found" });
  res.status(200).json({ success: true, message: "Department Deleted!" });
};

// === CATEGORY CRUD ===
exports.getCategories = async (req, res) => {
  const cats = await Category.find();
  res.status(200).json({ success: true, data: cats });
};

exports.createCategory = async (req, res) => {
  const newCat = new Category(req.body);
  await newCat.save();
  res.status(201).json({ success: true, message: "Category Created!", data: newCat });
};

exports.deleteCategory = async (req, res) => {
  const deleted = await Category.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: "Not Found" });
  res.status(200).json({ success: true, message: "Category Deleted!" });
};