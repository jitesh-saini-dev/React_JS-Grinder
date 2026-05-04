import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="  w-full p-5  flex items-center justify-center shadow-lg gap-8">
      <Link to={"/"}>Home</Link>
      <Link to={"/Admitionsfrom"}>Form</Link>
    </div>
  );
};

export default Header;
