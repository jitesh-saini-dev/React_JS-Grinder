import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Home from "./Component/Home";
import About from "./Component/About";
import Userdetail from "./Component/Userdetail";
import ProductForm from "./Component/ProductForm";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<Userdetail />} />
        <Route path="/prodform" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
