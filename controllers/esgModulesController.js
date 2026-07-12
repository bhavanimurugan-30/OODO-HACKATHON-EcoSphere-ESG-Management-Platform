const CarbonTransaction = require("../models/CarbonTransaction");
const CsrActivity = require("../models/CsrActivity");
const Governance = require("../models/Governance");
const Notification = require("../models/Notification");

// 1. Carbon Transactions
exports.getCarbonTx = async (req, res) => {
  const data = await CarbonTransaction.find();
  res.status(200).json({ success: true, data });
};
exports.createCarbonTx = async (req, res) => {
  const newTx = new CarbonTransaction(req.body);
  await newTx.save();
  res.status(201).json({ success: true, message: "Carbon transaction logged!", data: newTx });
};

// 2. CSR Activities
exports.getCsr = async (req, res) => {
  const data = await CsrActivity.find();
  res.status(200).json({ success: true, data });
};
exports.createCsr = async (req, res) => {
  const newCsr = new CsrActivity(req.body);
  await newCsr.save();
  res.status(201).json({ success: true, message: "CSR Activity registered!", data: newCsr });
};

// 3. Governance
exports.getGov = async (req, res) => {
  const data = await Governance.find();
  res.status(200).json({ success: true, data });
};
exports.createGov = async (req, res) => {
  const newGov = new Governance(req.body);
  await newGov.save();
  res.status(201).json({ success: true, message: "Governance record updated!", data: newGov });
};

// 4. Notifications
exports.getNotifications = async (req, res) => {
  const data = await Notification.find();
  res.status(200).json({ success: true, data });
};