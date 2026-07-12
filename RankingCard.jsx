import "../styles/RankingCard.css";

function RankingCard() {
  const departments = [
    { name: "IT", score: 95 },
    { name: "HR", score: 89 },
    { name: "Finance", score: 84 },
    { name: "Production", score: 79 },
  ];

  return (
    <div className="ranking-card">
      <h3>🏆 Department Rankings</h3>

      {departments.map((dept, index) => (
        <div className="ranking-item" key={index}>
          <span>{index + 1}. {dept.name}</span>
          <span>{dept.score}%</span>
        </div>
      ))}
    </div>
  );
}

export default RankingCard;