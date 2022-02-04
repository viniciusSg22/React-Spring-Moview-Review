import Score from "components/Score/score";
import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
  movie: Movie;
};

const Card = ({ movie }: Props) => {
  return (
    <div>
      <img className="movie-card-image" src={movie.image} alt={movie.title} />
      <div className="card-bottom-container">
        <h3>{movie.title}</h3>
        <Score count={movie.count} score={movie.score} />
        <Link to={`review/${movie.id}`}>
          <div className="btn btn-primary btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
