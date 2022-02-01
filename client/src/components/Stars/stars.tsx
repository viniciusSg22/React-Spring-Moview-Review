import React from "react";
import { ReactComponent as FullStar } from "assets/img/FullStar.svg";
import { ReactComponent as HalfStar } from "assets/img/HalfStar.svg";
import { ReactComponent as EmptyStar } from "assets/img/EmptyStar.svg";
import "components/Stars/stars.css";

const Stars = () => {
  return (
    <div className="stars-container">
      <FullStar />
      <FullStar />
      <FullStar />
      <HalfStar />
      <EmptyStar />
    </div>
  );
};

export default Stars;
