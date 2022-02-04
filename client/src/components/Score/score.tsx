import Stars from "components/Stars/stars";
import React from "react";
import "components/Score/score.css";

type Props = {
  score: number;
  count: number;
};
const Score = ({ score, count } : Props) => {
  return (
    <div className="score-container">
      <p className="score-value">{score > 0 ? score.toFixed(1) : "-"}</p>
      <Stars score={score} />
      <p className="score-count">{count} avaliações</p>
    </div>
  );
};

export default Score;
