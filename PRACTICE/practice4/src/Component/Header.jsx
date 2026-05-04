import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/signup" className="link">
          SignUp
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/cart" className="link">
          Cart
        </Link>
      </div>
    </>
  );
};

export default Header;
