import Stars from "components/Stars/stars";
import React from "react";
import "components/Score/score.css";

const Score = () => {
  const score = 3.5;
  const count = 16;
  return (
    <div className="score-container">
      <p className="score-value">{score > 0 ? score.toFixed(1) : "-"}</p>
      <Stars />
      <p className="score-count">{count} avaliações</p>
    </div>
  );
};

export default Score;
