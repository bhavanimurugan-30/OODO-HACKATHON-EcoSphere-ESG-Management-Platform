import React from "react";
import "../styles/Page.css";

function Social() {
  return (
    <div className="page">
      <h1>👥 Social Module</h1>

      <div className="card">
        <h3>🌳 Tree Plantation Drive</h3>
        <p><strong>Date:</strong> 20 July 2026</p>
        <p><strong>Participants:</strong> 42 Employees</p>
        <p>
          <strong>Status:</strong>
          <span className="completed"> Open</span>
        </p>

        <button>Join Activity</button>
        <button className="approve-btn">Approve</button>
      </div>

      <div className="card">
        <h3>📚 Education Support Program</h3>
        <p><strong>Status:</strong> Ongoing</p>
        <p>
          <strong>Proof:</strong>
          <span className="completed"> Uploaded ✓</span>
        </p>

        <button>Upload Proof</button>
      </div>

      <div className="card">
        <h3>🩸 Blood Donation Camp</h3>

        <p>
          <strong>Approval:</strong>
          <span className="pending"> Pending</span>
        </p>

        <p>
          <strong>Participants:</strong> 18 Employees
        </p>

        <button className="approve-btn">Approve</button>
      </div>
    </div>
  );
}

export default Social;