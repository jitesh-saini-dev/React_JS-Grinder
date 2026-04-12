import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link to={"/signin"} className="link">
        SignIn
      </Link>
    </div>
  );
};

export default Header;
