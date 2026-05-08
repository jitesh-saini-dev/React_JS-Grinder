import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Home from "./Component/Home";
import About from "./Component/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
