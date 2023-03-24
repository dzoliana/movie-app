import NewestMovies from "./NewestMovies";
import PopularMovies from "./PopularMovies";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Discovery.css";

const Discovery = () => {
  return (
    <>
      <div className="container">
        <NewestMovies />
        <PopularMovies />
      </div>
    </>
  );
};

export default Discovery;
