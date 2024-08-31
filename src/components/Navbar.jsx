import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Products from "../pages/Products";
import About from "../pages/About";
import Find from "../pages/Find";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart.svg";
import DropdownIcon from "../assets/dropDown.svg";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons"; // Import the desired icon

const Navbar = () => {
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isPageDropdownOpen, setPageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const productsDropdownRef = useRef(null); // Reference to the dropdown element
  const pageDropdownRef = useRef(null);

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!isProductsDropdownOpen);
    setPageDropdownOpen(false);
  };
  function togglePagesDropdown() {
    setPageDropdownOpen(!isPageDropdownOpen);
    setProductsDropdownOpen(false);
  }
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target)
      ) {
        setProductsDropdownOpen(false);
      }
      if (
        pageDropdownRef.current &&
        !pageDropdownRef.current.contains(event.target)
      ) {
        setPageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between py-5 bg-[#f7f8ff]">
        <img src={Logo} alt="" className="w-40 h-8" />
        {/* navbar links starts from here */}
        <ul className="hidden sm:flex  gap-8">
          <NavLink
            to="/"
            className="font-inter text-[#292c39] text-lg font-semibold hover:text-[#6385ee]"
          >
            Home
          </NavLink>
          {/* products code starts from here */}
          <div className="relative" ref={productsDropdownRef}>
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center font-inter text-[#292c39] text-lg font-semibold "
            >
              <span className="hover:text-[#6385ee]">Products</span>
              {/* <img
                src={DropdownIcon}
                alt="Dropdown Icon"
                className={`w-4 h-4 ml-1 transition-transform duration-200 font-semibold ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              /> */}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-1 transition-transform duration-300 w-4 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Drop Down Menu Starts from here */}
            {isProductsDropdownOpen && (
              <div className="absolute left-[-135px] mt-2 p w-[470px] h-[238px] font-inter text-lg bg-white border border-gray-200 rounded-3xl shadow-lg z-10">
                <div className="px-14 py-10">
                  <p className="font-semibold  text-gray-700 text-lg mb-2">
                    What are you looking for?
                  </p>
                  <hr className="border-gray-300 mb-3" />
                  <div className="grid grid-cols-2 gap-3 text-lg text-[#444655]">
                    <NavLink to="/earbuds" className="hover:text-[#6385ee]">
                      Earbuds
                    </NavLink>
                    <NavLink to="/headphones" className="hover:text-[#6385ee]">
                      Headphones
                    </NavLink>
                    <NavLink to="/speakers" className="hover:text-[#6385ee]">
                      Speakers
                    </NavLink>
                    <NavLink to="/accessories" className="hover:text-[#6385ee]">
                      Accessories
                    </NavLink>
                  </div>
                  <NavLink
                    to="/all-products"
                    className="block mt-3 text-lg text-[#406bd0] font-semibold hover:text-[#6385ee]"
                  >
                    Discover All Products
                  </NavLink>
                </div>
              </div>
            )}{" "}
          </div>
          {/* drop down for product code ends here */}
          <NavLink
            to="/about"
            className="font-inter text-[#292c39] text-lg font-semibold hover:text-[#6385ee]"
          >
            About
          </NavLink>
          <NavLink
            to="/find"
            className="font-inter text-[#292c39] text-lg font-semibold hover:text-[#6385ee]"
          >
            Find Us
          </NavLink>
          {/* dropdown for pages code starts from here */}
          <div className="relative" ref={pageDropdownRef}>
            <button
              className="font-inter text-[#292c39] text-lg font-semibold "
              onClick={togglePagesDropdown}
            >
              <span className="hover:text-[#6385ee]">Pages</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-1 transition-transform duration-300 w-4 ${
                  isPageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isPageDropdownOpen && (
              <div className="absolute left-[-250px] mt-2 w-[580px] h-[280px] font-inter text-lg bg-white border border-gray-200 rounded-3xl shadow-lg z-10">
                <div className="px-14 py-10">
                  <div className="grid grid-cols-3 gap-4 text-lg text-[#444655]">
                    {/* Column 1 */}
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Pages</p>
                      <NavLink
                        to="/home"
                        className="hover:text-[#6385ee] block"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/about"
                        className="hover:text-[#6385ee] block"
                      >
                        About
                      </NavLink>
                      <NavLink
                        to="/shop"
                        className="hover:text-[#6385ee] block"
                      >
                        Shop
                      </NavLink>
                      <NavLink
                        to="/product-category"
                        className="hover:text-[#6385ee] block"
                      >
                        Product Category
                      </NavLink>
                      <NavLink
                        to="/product-single"
                        className="hover:text-[#6385ee] block"
                      >
                        Product Single
                      </NavLink>
                    </div>
                    {/* Column 2 */}
                    <div>
                      {/* <p className="font-semibold text-gray-700 mb-2">
                        More Pages
                      </p> */}
                      <NavLink
                        to="/contact"
                        className="hover:text-[#6385ee] block mt-9"
                      >
                        Contact
                      </NavLink>
                      <NavLink
                        to="/blog"
                        className="hover:text-[#6385ee] block"
                      >
                        Blog
                      </NavLink>
                      <NavLink
                        to="/blog-post"
                        className="hover:text-[#6385ee] block"
                      >
                        Blog Post
                      </NavLink>
                      <NavLink
                        to="/policies"
                        className="hover:text-[#6385ee] block"
                      >
                        Policies
                      </NavLink>
                      <NavLink
                        to="/more-templates"
                        className="hover:text-[#6386ee] text-[#406bd0] font-semibold block"
                      >
                        More Templates
                      </NavLink>
                    </div>
                    {/* Column 3 */}
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">
                        Utility
                      </p>
                      <NavLink
                        to="/style-guide"
                        className="hover:text-[#6385ee] block"
                      >
                        Style Guide
                      </NavLink>
                      <NavLink
                        to="/licenses"
                        className="hover:text-[#6385ee] block"
                      >
                        Licenses
                      </NavLink>
                      <NavLink
                        to="/changelog"
                        className="hover:text-[#6385ee] block"
                      >
                        Changelog
                      </NavLink>
                      <NavLink to="/404" className="hover:text-[#6385ee] block">
                        404
                      </NavLink>
                      <NavLink
                        to="/password"
                        className="hover:text-[#6385ee] block"
                      >
                        Password
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ul>
        {/* navbar links end here */}
        {/* cart and buttoncode starts here */}
        <div className="relative flex">
          <div className="flex">
            <img src={Cart} className=" mr-8 cursor-pointer w-7" />
            <p className="absolute top-3 left-8 w-5 h-5 text-center cursor-pointer bg-[#292c39] font-inter text-white  font-bold rounded-full  text-[12px] leading-5">
              0
            </p>
          </div>

          <button className="mx-0 hover:bg-[#6385ee] hidden lg:block bg-[#406bd0] py-3 px-3 rounded-lg text-[#f7f8ff] text-lg font-semibold font-inter w-30 h-11 leading-3 hover:scale-95 transition-transform ">
            Shop Now
          </button>
        </div>
        {/* cart and button code ends here */}
        <div className="  md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-[#292c39]">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg z-20">
          <div className="flex flex-col p-5">
            <NavLink
              to="/"
              className="text-lg font-semibold text-[#292c39] py-2 hover:text-[#6385ee]"
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <button
              onClick={toggleProductsDropdown}
              className="text-lg font-semibold text-[#292c39] py-2 flex items-center hover:text-[#6385ee]"
            >
              Products
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transition-transform duration-300 w-4 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsDropdownOpen && (
              <div className="ml-4">
                <NavLink
                  to="/earbuds"
                  className="block py-2 text-lg text-[#444655] hover:text-[#6385ee]"
                  onClick={toggleMobileMenu}
                >
                  Earbuds
                </NavLink>
                <NavLink
                  to="/headphones"
                  className="block py-2 text-lg text-[#444655] hover:text-[#6385ee]"
                  onClick={toggleMobileMenu}
                >
                  Headphones
                </NavLink>
                <NavLink
                  to="/speakers"
                  className="block py-2 text-lg text-[#444655] hover:text-[#6385ee]"
                  onClick={toggleMobileMenu}
                >
                  Speakers
                </NavLink>
                <NavLink
                  to="/accessories"
                  className="block py-2 text-lg text-[#444655] hover:text-[#6385ee]"
                  onClick={toggleMobileMenu}
                >
                  Accessories
                </NavLink>
              </div>
            )}
            <NavLink
              to="/about"
              className="text-lg font-semibold text-[#292c39] py-2 hover:text-[#6385ee]"
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/find"
              className="text-lg font-semibold text-[#292c39] py-2 hover:text-[#6385ee]"
              onClick={toggleMobileMenu}
            >
              Find Us
            </NavLink>
            <button
              onClick={togglePagesDropdown}
              className="text-lg font-semibold text-[#292c39] py-2 flex items-center hover:text-[#6385ee]"
            >
              Pages
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transition-transform duration-300 w-4 ${
                  isPageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isPageDropdownOpen && (
              <div className="ml-4">
                <NavLink
                  to="/home"
                  className="block py-2 text-lg text-[#444655] hover:text-[#6385ee]"
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
                {/* Add other page links here */}
              </div>
            )}
            <button className="mt-4 bg-[#406bd0] text-white py-3 px-5 rounded-lg text-lg font-semibold hover:bg-[#6385ee]">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
