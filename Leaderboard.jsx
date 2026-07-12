import React from "react";
import "../styles/Gamification.css";

function Leaderboard() {

  const departments = [
    {rank:1, name:"IT Department", xp:2500},
    {rank:2, name:"Finance Department", xp:2100},
    {rank:3, name:"HR Department", xp:1800}
  ];

  return (
    <div className="card">
      <h2>🏆 Department Leaderboard</h2>

      {departments.map((dept)=>(
        <p key={dept.rank}>
          {dept.rank}. {dept.name} - {dept.xp} XP
        </p>
      ))}

    </div>
  );
}

export default Leaderboard;