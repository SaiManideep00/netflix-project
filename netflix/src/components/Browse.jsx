import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
}

export default Browse;
