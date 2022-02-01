import React from "react";
import "pages/Review/review.css";

const Review = () => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="vstech-form-container">
      <img
        className="vstech-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="vstech-card-bottom-container">
        <h3>{movie.title}</h3>
        <form className="vstech-form">
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="vstech-form-btn-container">
            <button type="submit" className="btn btn-primary vstech-btn">
              Salvar
            </button>
          </div>
        </form>
        <button className="btn btn-primary vstech-btn mt-3">Cancelar</button>
      </div>
    </div>
  );
};

export default Review;
