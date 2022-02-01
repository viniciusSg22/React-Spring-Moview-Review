import Card from "components/Card/card";
import Pagination from "components/Pagination/pagination";
import React from "react";

const Home = () => {
  return (
    <div>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <Card />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <Card />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <Card />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <Card />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <Card />
          </div>
          <div className="col-sm-6 col-log-4 col-xl-3 mb-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
