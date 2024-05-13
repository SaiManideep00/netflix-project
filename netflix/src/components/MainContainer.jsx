import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <div>
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
}

export default MainContainer;
