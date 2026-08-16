import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Home from "./Component/Home.jsx";
import Cart from "./Component/Cart.jsx";
import Menu from "./Component/Menu.jsx";
import Wishlist from "./Component/Wishlist.jsx";
import Reservation from "./Component/Reservation.jsx";
import OurStory from "./Component/OurStory.jsx";
import Contact from "./Component/Contact.jsx";
import Menudetails from "./Component/Menudetails.jsx";
import Footer from "./Component/Footer.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Menudetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
