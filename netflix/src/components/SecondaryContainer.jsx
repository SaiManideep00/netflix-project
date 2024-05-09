import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList
          title={"Now playing"}
          movies_list={movies?.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Popular"}
          movies_list={movies?.popularMovies}
        ></MovieList>
        {/* <MovieList title={"Now playing"} movies_list={playing}></MovieList>
        <MovieList title={"Now playing"} movies_list={playing}></MovieList> */}
      </div>
    </div>
  );
}

export default SecondaryContainer;
