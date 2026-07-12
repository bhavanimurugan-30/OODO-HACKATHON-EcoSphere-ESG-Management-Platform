const express = require("express");
const cors = require("cors");

// ==========================================
// ROUTE IMPORTS (Member A + Member B)
// ==========================================
const authRoutes = require("./routes/authRoutes");
const esgRoutes = require("./routes/esgRoutes");
const masterRoutes = require("./routes/masterRoutes");
const esgMasterRoutes = require("./routes/esgMasterRoutes"); // Member B's Module

const app = express();

// ==========================================
// GLOBAL MIDDLEWARES
// ==========================================
app.use(cors());
app.use(express.json()); 

// ==========================================
// HEALTH ROADCHECK
// ==========================================
app.get("/", (req, res) => {
  res.send("EcoSphere ESG Platform Backend is completely active and firing on all cylinders!");
});

// ==========================================
// API ROUTE MOUNTING
// ==========================================
// Member A's Endpoints
app.use("/api/auth", authRoutes);     // User Reg & Login
app.use("/api/esg", esgRoutes);       // Dashboard KPI Metrics
app.use("/api", masterRoutes);         // Departments & Categories CRUD

// Member B's Endpoints
app.use("/api/master", esgMasterRoutes); // Employees, Policies, & Emission Factors CRUD

// ==========================================
// SERVER INITIALIZATION
// ==========================================
const PORT = 5000;
app.listen(PORT, () => {
  console.log("=========================================================");
  console.log("🚀 HACKATHON CORE BOOTED SUCCESSFULLY");
  console.log("Database Connection: In-Memory Virtual RAM Active");
  console.log("Listening for endpoints on standard Port: " + PORT);
  console.log("=========================================================");
  console.log("🟢 All Member A and Member B routes mounted correctly.");
});