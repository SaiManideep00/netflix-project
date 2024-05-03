import { useSelector } from "react-redux";
import Header from "./Header";

function Browse() {
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
