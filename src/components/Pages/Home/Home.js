import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [discover, setDiscover] = useState(true);

  const discoverHandler = () => {
    setDiscover((prev) => !prev);
  };

  return (
    <>
      {discover && (
        <Link to="/discovery">
          <div className="center">
            <button onClick={discoverHandler} className="button">
              Discover Movies
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default Home;
