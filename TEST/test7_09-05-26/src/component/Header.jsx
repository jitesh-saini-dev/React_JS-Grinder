import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/form" className="link">
          Product form
        </Link>
       
      </div>
    </>
  );
};

export default Header;
