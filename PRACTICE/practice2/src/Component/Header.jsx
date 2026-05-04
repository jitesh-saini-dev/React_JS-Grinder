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
      <Link to={"/parent"} className="link">
        parent
      </Link>
      <Link to={"/child"} className="link">
        child
      </Link>
      <Link to={"/childtwo"} className="link">
        child2
      </Link>
      <Link to={"/parenttwo"} className="link">
        parent2
      </Link>
        <Link to={"/common"} className="link">
        Common
      </Link>
      <Link to={"/use"} className="link">
        Use
      </Link>
    </div>
  );
};

export default Header;
