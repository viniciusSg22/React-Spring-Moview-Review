import React from "react";
import { ReactComponent as ArrowLeft } from "assets/img/arrowLeft.svg";
import "components/Pagination/pagination.css";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination-box">
        <button className="pagination-button" disabled={true}>
          <ArrowLeft />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="pagination-button" disabled={false}>
          <ArrowLeft className="flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
