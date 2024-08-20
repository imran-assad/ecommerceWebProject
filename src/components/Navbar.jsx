import React from "react";
import { NavLink } from "react-router-dom";
import Products from "../pages/Products";
import About from "../pages/About";
import Find from "../pages/Find";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/find">Find Us</NavLink>
        <NavLink to="/pages">Pages</NavLink>
      </nav>
    </>
  );
};
export default Navbar;
