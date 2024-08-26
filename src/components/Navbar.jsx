import React from "react";
import { NavLink } from "react-router-dom";
import Products from "../pages/Products";
import About from "../pages/About";
import Find from "../pages/Find";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-5">
        <img src={Logo} alt="" className="w-40 h-8" />
        <ul className="hidden sm:flex  gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/find">Find Us</NavLink>
          <NavLink to="/pages">Pages</NavLink>
        </ul>
        <div className="relative flex">
          <img src={Cart} alt="" className="curson-pointer w-7" />
          <p className="absolute top-1 left-8 w-5 h-5 text-center cursor-pointer bg-black text-white  rounded-full  text-[12px]">
            0
          </p>
          <button className="mx-10 bg-blue-700 py-3 px-3 border-r-2 text-white">
            Shop Now
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
