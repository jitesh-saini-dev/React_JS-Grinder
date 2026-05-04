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
import AllOrders from "./Components/AllOrders";
import AllWishlist from "./Components/AllWishlist";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        style={{ backgroundColor: "red", width: "50px" }}
      >
        {theme === "light" ? "dark" : "light"}
      </button>
      <BrowserRouter>
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

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/allorders"
            element={
              <Protectedroute>
                <AllOrders />
              </Protectedroute>
            }
          />

          <Route path="/allwishlist" element={<AllWishlist />} />


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
