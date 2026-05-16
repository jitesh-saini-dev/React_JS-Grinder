import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="link">
          UserForm
        </Link>
      </div>
    </>
  );
};

export default Header;
