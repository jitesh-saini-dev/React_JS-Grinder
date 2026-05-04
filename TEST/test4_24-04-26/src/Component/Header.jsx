import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/Login" className="link">
          Login
        </Link>
        <Link to="/signup" className="link">
          Signup
        </Link>
      </div>
    </>
  );
};

export default Header;
