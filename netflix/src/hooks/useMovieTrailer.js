import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addTrailerMovie } from "../utils/moviesSlice";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MOVIE_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[1] : json.results[0];
    dispatch(addTrailerMovie(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;
