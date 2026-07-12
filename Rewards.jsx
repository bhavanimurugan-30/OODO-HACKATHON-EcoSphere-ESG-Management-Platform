import React from "react";
import "../styles/Gamification.css";

function Rewards() {

  const rewards = [
    {
      xp: "500 XP",
      reward: "🌱 Green Starter Badge"
    },
    {
      xp: "1000 XP",
      reward: "🏆 Sustainability Certificate"
    },
    {
      xp: "2000 XP",
      reward: "⭐ ESG Champion Reward"
    }
  ];

  return (
    <div className="card">
      <h2>🎁 Rewards</h2>

      {rewards.map((item, index) => (
        <div key={index}>
          <p>
            {item.xp} → {item.reward}
          </p>
        </div>
      ))}

    </div>
  );
}

export default Rewards;