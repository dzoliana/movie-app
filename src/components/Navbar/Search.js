import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/discovery");
    console.log("Searching");
    console.log(e);
    console.log(searchValue);
    props.onSetSearchedMovies(searchValue);
    setSearchValue("");
  };

  const searchValueHandler = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <Form className="d-flex" onSubmit={submitHandler} autoComplete="off">
      <FormControl
        type="search"
        placeholder="Search Movie"
        className="me-2"
        aria-label="search"
        name="query"
        value={searchValue}
        onChange={searchValueHandler}
      ></FormControl>
    </Form>
  );
};

export default Search;
