import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Places from "./Components/Places";
import Description from "./Components/Description";
import Rivers from "./Components/Rivers";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about/:id"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="/places" element={<Places />} />
          <Route path="/description" element={<Description />} />
          <Route path="/rivers" element={<Rivers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
