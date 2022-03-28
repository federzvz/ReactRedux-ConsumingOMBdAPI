import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import userProfileImage from "../../images/userProfileImage.png";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return;
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm("");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">CineMovies</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Buscar Películas o Series..."
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="logo">
        <Link to="/favoritos" className="disabled-link">
          Favoritos
        </Link>
      </div>
      <div className="user-image">
        <img src={userProfileImage} alt="user" />
      </div>
    </div>
  );
};

export default Header;
