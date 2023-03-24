import React from "react";
import MovieBox from "../Pages/Discovery/MovieBox";
import Favorites from "./Favorites";
import Search from "./Search";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import { API_SEARCH } from "../../config";
import "./NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  const [api, setApi] = useState("");

  const displayMovieHandler = (searchedMovie) => {
    console.log(searchedMovie);

    const url = `${API_SEARCH}=${searchedMovie}`;
    setApi(url);
  };

  return (
    <>
      <Navbar variant="dark" sticky="top" className="navigation">
        <Container fluid>
          <Navbar.Brand href="/">Movie App</Navbar.Brand>

          <Nav className="me-sm-2 dropdown-menu-right">
            <Favorites />
            <Search onSetSearchedMovies={displayMovieHandler} />
          </Nav>
        </Container>
      </Navbar>
      <div>
        {api.length > 0 ? (
          <div className="container">
            <h1>Searched movies</h1>
            <div className="grid">
              <MovieBox api={api} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavigationBar;
