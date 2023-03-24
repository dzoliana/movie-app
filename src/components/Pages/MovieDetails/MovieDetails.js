import { useLocation } from "react-router-dom";
import { API_IMG } from "../../../config";
import "./MovieDetails.css";
import { HeartFill } from "react-bootstrap-icons";

const MovieDetails = () => {
  const location = useLocation();
  const state = location.state;
  // console.log(state);

  return (
    <>
      <div class="card-container">
        <img
          class="hero-image hero-image-container"
          src={API_IMG + state.poster_path}
          alt=""
        />

        <main class="main-content">
          <h1>{state.title}</h1>
          <p>{state.overview}</p>
          <div class="flex-row">
            <div class="time-left">
              <p>IMDb: {state.vote_average}</p>
            </div>
            <div class="time-left">
              <p>Release Date: {state.release_date}</p>
            </div>
          </div>
        </main>
        <div class="card-attribute">
          <HeartFill className=" heart-icon" size={30}></HeartFill>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
