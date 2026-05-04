import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="link">
        Home
      </Link>
      <Link to={"/cart"} className="link">
        Cart
      </Link>
      {/* <Link to={"/signup"} className="link">
      Signup
      </Link> */}
    </div>
  );
};

export default Header;
