import React from "react";
import "../styles/Page.css";

function Governance() {
  return (
    <div className="page">
      <h1>🏛 Governance</h1>

      <div className="card">
        <h3>ESG Policies</h3>
        <p>✔ Code of Conduct</p>
        <p>✔ Sustainability Policy</p>
      </div>

      <div className="card">
        <h3>Compliance Issues</h3>
        <p>⚠ Waste Management Pending</p>
        <p>⚠ Carbon Audit Pending</p>
      </div>

      <div className="card">
        <h3>Audit Tracking</h3>
        <p>Completed: 12</p>
        <p>Pending: 2</p>
      </div>
    </div>
  );
}

export default Governance;