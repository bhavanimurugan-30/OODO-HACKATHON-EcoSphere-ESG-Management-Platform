const express = require("express");
const cors = require("cors");

// ==========================================
// ROUTE IMPORTS (Members A, B, & 3)
// ==========================================
const authRoutes = require("./routes/authRoutes");
const esgRoutes = require("./routes/esgRoutes");
const masterRoutes = require("./routes/masterRoutes");
const esgMasterRoutes = require("./routes/esgMasterRoutes");
const esgModulesRoutes = require("./routes/esgModulesRoutes"); // Member 3 Track

const app = express();

// ==========================================
// GLOBAL MIDDLEWARES
// ==========================================
app.use(cors());
app.use(express.json()); 

// ==========================================
// HEALTH CHECK
// ==========================================
app.get("/", (req, res) => {
  res.send("EcoSphere ESG Platform Backend is completely active and firing on all cylinders!");
});

// ==========================================
// API ROUTE MOUNTING
// ==========================================
// Member A's Endpoints
app.use("/api/auth", authRoutes);       // User Registration & Login
app.use("/api/esg", esgRoutes);         // Dashboard KPI Metrics
app.use("/api", masterRoutes);           // Departments & Categories CRUD

// Member B's Endpoints
app.use("/api/master", esgMasterRoutes); // Employees, Policies, & Emission Factors CRUD

// Member 3's Endpoints
app.use("/api/modules", esgModulesRoutes); // Carbon Tracker, CSR, Governance, & Notifications

// ==========================================
// SERVER INITIALIZATION
// ==========================================
const PORT = 5000;
app.listen(PORT, () => {
  console.log("=========================================================");
  console.log("🚀 ECOSPHERE MULTI-MEMBER BACKEND ENGINE FULLY OPERATIONAL");
  console.log("Database System  : Unified In-Memory RAM Engine Active");
  console.log("Port Assignment  : Running on Localhost:" + PORT);
  console.log("=========================================================");
  console.log("🟢 Member A routes live  (/api/auth, /api/esg, /api)");
  console.log("🟢 Member B routes live  (/api/master/*)");
  console.log("🟢 Member 3 routes live  (/api/modules/*)");
  console.log("=========================================================");
});