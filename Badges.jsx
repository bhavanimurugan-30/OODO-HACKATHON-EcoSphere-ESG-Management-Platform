import React from "react";
import "../styles/Gamification.css";


function Badges() {

  const badges = [
    "🌱 Green Starter",
    "🔥 Carbon Saver",
    "🏆 ESG Champion"
  ];

  return (
    <div className="card">
      <h2>🏆 Badges</h2>

      {badges.map((badge,index)=>(
        <p key={index}>{badge}</p>
      ))}

    </div>
  );
}

export default Badges;