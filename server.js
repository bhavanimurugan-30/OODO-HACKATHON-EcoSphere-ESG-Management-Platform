const express = require("express");
const cors = require("cors");

// ROUTE IMPORTS
const authRoutes = require("./routes/authRoutes");
const esgRoutes = require("./routes/esgRoutes");
const masterRoutes = require("./routes/masterRoutes");

const app = express();

// 1. MIDDLEWARES (Essential for API requests & reading JSON body data)
app.use(cors());
app.use(express.json()); 

// 2. BACKEND STATUS ROADCHECK
app.get("/", (req, res) => {
  res.send("EcoSphere ESG Management Platform API is active and running cleanly!");
});

// 3. API ROUTES MOUNTING
app.use("/api/auth", authRoutes); // Handles Register & Login
app.use("/api/esg", esgRoutes);   // Handles ESG Dashboard Metrics
app.use("/api", masterRoutes);     // Handles Departments & Categories CRUD

// 4. SERVER START CONFIGURATION
const PORT = 5000;
app.listen(PORT, () => {
  console.log("---------------------------------------------------------");
  console.log("🚀 Hackathon Mode: Local In-Memory Database Engine Running");
  console.log("Database status: Connected to Virtual RAM (Users, Depts, Categories)");
  console.log("---------------------------------------------------------");
  console.log(`Server running smoothly on port ${PORT}`);
});