const EsgMetric = require("../models/EsgMetric");

// GET ALL ESG DASHBOARD METRICS
exports.getMetrics = async (req, res) => {
  try {
    const metrics = await EsgMetric.find();
    res.status(200).json({
      success: true,
      count: metrics.length,
      data: metrics
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching ESG data", error: error.message });
  }
};

// ADD NEW HACKATHON DASHBOARD RECORD
exports.createMetric = async (req, res) => {
  try {
    const newMetric = new EsgMetric(req.body);
    await newMetric.save();
    res.status(201).json({
      success: true,
      message: "ESG Metric entry recorded successfully!",
      data: newMetric
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving ESG data", error: error.message });
  }
};