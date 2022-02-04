import axios from "axios";
import Card from "components/Card/card";
import Pagination from "components/Pagination/pagination";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?page=${pageNumber}&size=12&sort=title`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  return (
    <div>
      <Pagination />
      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-log-4 col-xl-3 mb-3">
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
