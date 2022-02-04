import FormCard from "components/FormCard/formCard";
import React from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const params = useParams();

  return <FormCard movieId={`${params.movieId}`} />;
};

export default Review;
