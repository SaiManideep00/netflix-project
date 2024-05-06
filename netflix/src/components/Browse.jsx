import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

function Browse() {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
  const user = useSelector((store) => store.user);
  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default Browse;
