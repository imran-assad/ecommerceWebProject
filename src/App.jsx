import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Find from "./pages/Find.jsx";
import Home from "./pages/Home.jsx";
import Pages from "./pages/Pages.jsx";
import Products from "./pages/Products.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { MainLayout } from "./Layouts/MainLayout.jsx";
const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <MainLayout>
                <Products />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/pages"
            element={
              <MainLayout>
                <Pages />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/find"
            element={
              <MainLayout>
                <Find />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
