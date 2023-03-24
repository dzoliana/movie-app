import React from "react";
import { NavDropdown } from "react-bootstrap";
import "../Navbar/NavigationBar.css";

const Favorites = () => {
  var storage = JSON.parse(localStorage.getItem("movie-favourites"));
  console.log(storage);

  return (
    <>
      <NavDropdown
        title="Favorites"
        id="basic-nav-dropdown"
        className="dropdown"
      >
        {storage ? (
          <div>
            {storage.map((movie) => (
              <NavDropdown.Item key={movie.id}>
                <div> {movie.title}</div>
              </NavDropdown.Item>
            ))}
          </div>
        ) : (
          <h4 className="text-center">No favorites!</h4>
        )}
      </NavDropdown>
    </>
  );
};
export default Favorites;
