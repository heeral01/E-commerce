import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";


import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="top-navbar">
        <ul className="ul-nav">
          <li>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-link">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-link">
              <FiShoppingCart />
              <span>10</span>
            </NavLink>
          </li>
        </ul>
       
      </div>
      
    </nav>
  );
}

export default Navbar;
