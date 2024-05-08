import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useNowPlayingMovies();
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
