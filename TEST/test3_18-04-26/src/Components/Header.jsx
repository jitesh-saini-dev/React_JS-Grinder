import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="link">
        Product
      </Link>
    </div>
  );
};

export default Header;
