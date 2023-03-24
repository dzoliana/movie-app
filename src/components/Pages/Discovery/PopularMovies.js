import { API_POPULAR } from "../../../config";
import HorizontalScroll from "react-horizontal-scrolling";
import MovieBox from "./MovieBox";
import "./Discovery.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PopularMovies = () => {
  return (
    <>
      <h1>Popular movies</h1>

      <div className="container-fluid movie-app">
        <HorizontalScroll>
          <div className="row">
            <div className="d-flex justify-content-center">
              <MovieBox api={API_POPULAR} />
            </div>
          </div>
        </HorizontalScroll>
      </div>
    </>
  );
};
export default PopularMovies;
