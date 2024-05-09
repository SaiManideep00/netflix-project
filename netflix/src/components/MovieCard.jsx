import React from "react";
import { IMAGE_CDN } from "../utils/constants";
function MovieCard({ posterPath }) {
  return (
    <div className="w-48 m-2">
      <img src={IMAGE_CDN + posterPath}></img>
    </div>
  );
}

export default MovieCard;
