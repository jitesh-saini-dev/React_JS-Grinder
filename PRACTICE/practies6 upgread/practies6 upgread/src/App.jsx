import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Protectedroute from "./Components/Protectedroute";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import UserDetail from "./Components/UserDetail";
import Recipes from "./Components/Recipes";
import Posts from "./Components/Posts";
import Cart from "./Components/Cart";
import useTheme from "./Components/useTheme";
import AllOrder from "./Components/AllOrder";
import AllWishlist from './Components/AllWishlist'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div
        style={{
          background: "var(--bg)",
          color: "var(--text)",
          minHeight: "100vh",
        }}
      >
        <div className="flex justify-end p-3">
          <button onClick={toggleTheme}>
            {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/user/:id"
            element={
              <Protectedroute>
                <UserDetail />
              </Protectedroute>
            }
          />

          <Route
            path="/recipes/:id"
            element={
              <Protectedroute>
                <Recipes />
              </Protectedroute>
            }
          />

          <Route path="/posts/:id" element={<Posts />} />

          <Route
            path="/cart/:id"
            element={
              <Protectedroute>
                <Cart />
              </Protectedroute>
            }
          />

          <Route
            path="/allorder"
            element={
              <Protectedroute>
                <AllOrder />
              </Protectedroute>
            }
          />

          <Route path="/AllWishlist" element={<AllWishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;