import React from "react";
import "../styles/Gamification.css";
function XPCard() {
  return (
    <div className="card">
      <h2>🎮 Sustainability XP</h2>
      <h3>850 XP</h3>
      <p>Level: Eco Champion</p>

      <div className="progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

export default XPCard;