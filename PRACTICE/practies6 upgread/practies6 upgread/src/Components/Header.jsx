import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const Logoutuser = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          MyApp
        </h1>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/signup"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            SignUp
          </Link>

          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Login
          </Link>

          <Link
            to="/allorder"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Orders
          </Link>

            
          <Link
            to="/AllWishlist"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            AllWishlist
          </Link>

          <button
            onClick={Logoutuser}
            className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;