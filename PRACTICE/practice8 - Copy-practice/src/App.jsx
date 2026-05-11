import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Home from "./Component/Home";
import About from "./Component/About";
import Userdetail from "./Component/Userdetail";
import ProductForm from "./Component/ProductForm";
import Cart from "./Component/Cart";
import ProtectedRoute from "./Component/Protectedroute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/user/:id"
          element={
            <ProtectedRoute>
              <Userdetail />
            </ProtectedRoute>
          }
        />
        <Route path="/prodform" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
