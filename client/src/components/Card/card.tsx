import Score from "components/Score/score";
import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };
  return (
    <div>
      <img className="movie-card-image" src={movie.image} alt={movie.title} />
      <div className="card-bottom-container">
        <h3>{movie.title}</h3>
        <Score />
        <Link to={`review/${movie.id}`}>
          <div className="btn btn-primary btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
