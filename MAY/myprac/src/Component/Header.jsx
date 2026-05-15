// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <Link to="/">Home</Link>
//       <Link to="/menu">Menu</Link>
//       <Link to="/reservation">Reservations</Link>
//       <Link to="/ourstory">Our Story</Link>
//       <Link to="/contact">Contact</Link>

//       <Link to="/wishlist">Wislist</Link>
//       <Link to="/cart">Cart</Link>
//     </>
//   );
// };

// export default Header;

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Truck, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/reservation" },
  { label: "Our Story", to: "/ourstory" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🛒 Replace with real cart count from Redux later
  const cartCount = 0;

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#1a1a1a] border-b border-[#2e2e2e]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1300px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* ── Logo ── */}
        <Link
          to="/"
          className="text-white text-2xl font-semibold tracking-wide no-underline hover:opacity-80 transition-opacity"
        >
          Dinevera
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-sm tracking-wide no-underline transition-colors duration-200
                  ${
                    active
                      ? "text-[#f4a4a4] font-medium"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* ── Right: Order Now + Cart ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Order Now Button */}
          <Link
            to="/menu"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-[#f4a4a4] hover:bg-[#f08f8f] text-black text-sm
                           font-medium tracking-wide no-underline
                           transition-all duration-200 shadow-lg shadow-pink-900/20"
          >
            <Truck size={16} strokeWidth={2} />
            Order Now
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-11 h-11
                           bg-[#2a2a2a] hover:bg-[#333] rounded-xl
                           text-white no-underline transition-colors duration-200"
          >
            <ShoppingCart size={18} />
            {cartCount >= 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full
                               bg-green-500 text-white text-[10px] font-bold
                               flex items-center justify-center"
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1f1f1f] border-t border-[#2e2e2e] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, to }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-wide no-underline transition-colors
                  ${active ? "text-[#f4a4a4] font-medium" : "text-gray-400 hover:text-white"}`}
              >
                {label}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 pt-2 border-t border-[#2e2e2e]">
            <Link
              to="/menu"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f4a4a4]
                             text-black text-sm font-medium no-underline"
            >
              <Truck size={15} /> Order Now
            </Link>

            <Link
              to="/cart"
              onClick={() => setMobileOpen(false)}
              className="relative flex items-center justify-center w-10 h-10
                             bg-[#2a2a2a] rounded-xl text-white no-underline"
            >
              <ShoppingCart size={17} />
              <span
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full
                               bg-green-500 text-white text-[10px] font-bold
                               flex items-center justify-center"
              >
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
