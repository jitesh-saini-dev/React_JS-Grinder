import { Link } from "react-router-dom";

const Header = () => {



  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 ">


        <div className="flex items-center gap-6">


          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            About
          </Link>

          <Link
            to="/places"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Places
          </Link>
          <Link
            to="/description"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Description
          </Link>
          <Link
            to="/rivers"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Rivers
          </Link>

          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Login
          </Link>


          <Link
            to="/signup"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition font-medium"
          >
            Signup
          </Link>


        </div>
      </div>
    </div>
  );
};

export default Header;