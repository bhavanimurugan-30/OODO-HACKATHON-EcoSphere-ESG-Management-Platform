const Employee = require("../models/Employee");
const EsgPolicy = require("../models/EsgPolicy");
const EmissionFactor = require("../models/EmissionFactor");

// ==========================================
// 1. EMPLOYEE CRUD CONTROLLERS
// ==========================================
exports.getEmployees = async (req, res) => {
  try {
    const data = await Employee.find();
    res.status(200).json({ success: true, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    await newEmp.save();
    res.status(201).json({ success: true, message: "Employee added!", data: newEmp });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ==========================================
// 2. ESG POLICY CRUD CONTROLLERS
// ==========================================
exports.getPolicies = async (req, res) => {
  try {
    const data = await EsgPolicy.find();
    res.status(200).json({ success: true, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createPolicy = async (req, res) => {
  try {
    const newPolicy = new EsgPolicy(req.body);
    await newPolicy.save();
    res.status(201).json({ success: true, message: "ESG Policy created!", data: newPolicy });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ==========================================
// 3. EMISSION FACTOR CRUD CONTROLLERS
// ==========================================
exports.getFactors = async (req, res) => {
  try {
    const data = await EmissionFactor.find();
    res.status(200).json({ success: true, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createFactor = async (req, res) => {
  try {
    const newFactor = new EmissionFactor(req.body);
    await newFactor.save();
    res.status(201).json({ success: true, message: "Emission Factor configured!", data: newFactor });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};