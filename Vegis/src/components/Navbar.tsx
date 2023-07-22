// import { useState } from "react";

import { Link } from "react-router-dom";
import useStore from "../context/store";
import { useState } from "react";

function Navbar() {
  const { cart } = useStore();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between p-8 items-center">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-evenly items-center gap-2 navbarfont">
        <Link to="/">HOME</Link>
        <div>
          <Link to="/store">SHOP</Link>
        </div>
        <div>
          <Link to="/blog">BLOG</Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center">
        <button onClick={handleMenuToggle}>
          <button
            className={`btn ${showMenu ? "active" : "not-active"}`}
            onClick={handleMenuToggle}
          >
            <div className="w-8 h-8">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </button>
      </div>

      <div className=" -ml-20">
        <Link className="logoname uppercase text-center" to="/">
          Pickels
        </Link>
      </div>

      <Link to="/shopping" className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

        {cart.length}
      </Link>
      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-20 bg-white w-screen h-screen pr-16">
          <div className=" flex flex-col justify-evenly items-center mt-40 mobilnavbar">
            <Link to="/">HOME</Link>
            <Link to="/store">SHOP</Link>
            <Link to="#">BLOG</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
