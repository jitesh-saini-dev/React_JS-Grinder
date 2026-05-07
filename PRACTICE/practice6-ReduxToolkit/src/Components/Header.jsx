import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handlelog = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/signup" className="link">
          SignUp
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/allorders" className="link">
          Allorders
        </Link>

        <Link to="/allwishlist" className="link">
          Allwishlist
        </Link>

        <button
          onClick={handlelog}
          style={{
            padding: "5px 12px ",
            borderRadius: "20px",
            backgroundColor: "red",
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
