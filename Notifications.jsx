import React from "react";
import "../styles/Page.css";

function Notifications() {
  return (
    <div className="page">
      <h1>🔔 Notifications</h1>

      <div className="card">🌱 New CSR Activity Available</div>

      <div className="card">📄 ESG Report Generated</div>

      <div className="card">🏆 Congratulations! New Badge Earned</div>

      <div className="card">⚠ Compliance Due Tomorrow</div>
    </div>
  );
}

export default Notifications;