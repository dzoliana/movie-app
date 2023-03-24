import MovieBox from "./MovieBox";
import { API_NEWEST } from "../../../config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Discovery.css";

const NewestMovies = () => {
  return (
    <>
      <h1>Newest movies</h1>
      <div className="grid">
        <MovieBox api={API_NEWEST} />
      </div>
    </>
  );
};

export default NewestMovies;
