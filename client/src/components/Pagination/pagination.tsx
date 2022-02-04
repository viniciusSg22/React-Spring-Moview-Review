import React from "react";
import { ReactComponent as ArrowLeft } from "assets/img/arrowLeft.svg";
import "components/Pagination/pagination.css";
import { MoviePage } from "types/movie";

type Props = {
  page: MoviePage;
  onChange: Function;
};

const Pagination = ({ page, onChange }: Props) => {
  return (
    <div className="pagination-container">
      <div className="pagination-box">
        <button
          className="pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <ArrowLeft />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <ArrowLeft className="flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
