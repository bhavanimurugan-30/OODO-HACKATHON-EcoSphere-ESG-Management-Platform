import "../styles/ScoreCard.css";

function ScoreCard({ title, value, color }) {
  return (
    <div className="score-card">
      <div
        className="score-strip"
        style={{ backgroundColor: color }}
      ></div>

      <div className="score-content">
        <h3>{title}</h3>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default ScoreCard;