import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

      MOVIE_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};
export default usePopularMovies;
