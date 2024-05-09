import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies_list }) {
  let arr = [1, 2, 3];
  if (movies_list != null) {
    arr = Object.values(movies_list);
  }
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex  overflow-x-scroll">
        <div className="flex ">
          {arr.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
