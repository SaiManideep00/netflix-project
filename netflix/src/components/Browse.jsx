import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default Browse;
