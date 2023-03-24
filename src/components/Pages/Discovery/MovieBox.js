import React, { useState, useEffect } from "react";
import { API_IMG } from "../../../config";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "../../../App.css";
import "./MovieBox.css";

const MovieBox = (props) => {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    fetch(props.api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.log("Error Reading data: " + err);
      });
  }, [props.api]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-favourites", JSON.stringify(items));
  };

  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem("movie-favourites"));
    if (Array.isArray(movieFav)) {
      setFavourite(movieFav);
    }
  }, []);

  const addFavouriteMovie = (movieObj) => {
    console.log(movieObj);
    const isAlreadyFavourite = favourite.filter(
      (eachMovieObj) => eachMovieObj.id === movieObj.id
    );
    console.log(isAlreadyFavourite);
    if (isAlreadyFavourite.length > 0) {
      return;
    }
    const newLikedMovies = [...favourite, movieObj];

    setFavourite(newLikedMovies);
    // console.log(newLikedMovies);
    console.log(favourite);
    saveToLocalStorage(newLikedMovies);
  };

  /* const removeFavouriteMovie = (movieObj) => {
    const removeFav = favourite.filter(
      (favourite) => favourite.id !== movieObj.id
    );

    setFavourite(removeFav);
    saveToLocalStorage(removeFav);
  }; */

  return (
    <>
      {movies.map((movieReq) => (
        <div key={movieReq.id}>
          <div className="card text-center bg-secondary mb-3">
            <img
              className="card-img-top"
              src={API_IMG + movieReq.poster_path}
              alt=""
            />

            <div>
              <Link to={`/movieDetails/${movieReq.id}`} state={movieReq}>
                <Button variant="secondary" className="btn">
                  Details
                </Button>
              </Link>

              <HeartFill
                onClick={() => addFavouriteMovie(movieReq)}
                className="heart-icon"
              ></HeartFill>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieBox;
