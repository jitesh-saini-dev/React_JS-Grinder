import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="link">
        SignUp
      </Link>
      <Link to={"/signin"} className="link">
        SignIn
      </Link>
      <Link to={"/searching"} className="link">
        Searching
      </Link>
    </div>
  );
};

export default Header;
