import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link to={"/counter"} className="link">
        Counter
      </Link>
      <Link to={"/signin"} className="link">
        SignIn
      </Link>
      <Link to={"/signup"} className="link">
        SignUp
      </Link>
      <Link to={"/new"} className="link">
        New
      </Link>
        <Link to={"/newtwo"} className="link">
        New2
      </Link>
       <Link to={"/api"} className="link">
        Api
      </Link>
      <Link to={"/showuseapi"} className="link">
        ShowUseApiData
      </Link>

      
    </div>
  );
};

export default Header;
