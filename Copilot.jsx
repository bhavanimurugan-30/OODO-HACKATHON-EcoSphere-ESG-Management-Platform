import React, { useState } from "react";
import "../styles/Copilot.css";

function Copilot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const responses = {
    "Why did our ESG score decrease?":
      "Finance department carbon emissions increased by 35%. Consider reducing travel and using virtual meetings.",

    "How can we improve our ESG score?":
      "Improve employee participation, reduce carbon emissions, and complete sustainability goals.",

    "Which department has highest carbon emissions?":
      "Finance department currently has the highest carbon emissions.",

    "Who earned new badges?":
      "Employees who completed sustainability challenges earned new badges."
  };

  const askAI = () => {
    const result = responses[question];

    if (result) {
      setAnswer(result);
    } else {
      setAnswer(
        "I will analyze ESG data and suggest sustainability improvements."
      );
    }
  };

  return (
    <div className="copilot">
      <h2>🤖 EcoSphere AI Copilot</h2>

      <div className="chat-box">
        <p><b>User:</b> {question}</p>
        <p><b>AI:</b> {answer}</p>
      </div>

      <input
        type="text"
        placeholder="Ask ESG question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askAI}>
        Ask
      </button>

      <h4>Try:</h4>
      <p>• Why did our ESG score decrease?</p>
      <p>• How can we improve our ESG score?</p>
      <p>• Which department has highest carbon emissions?</p>
    </div>
  );
}

export default Copilot;