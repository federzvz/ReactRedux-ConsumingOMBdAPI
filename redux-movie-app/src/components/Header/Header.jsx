import React from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";
import userProfileImage from "../../images/userProfileImage.png";

const Header = () => {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">TodaviaNoHayNombre</div>
        </Link>
        <div className="user-image">
          <img src={userProfileImage} alt="user" />
        </div>
      </div>
    );
  };
  

export default Header;