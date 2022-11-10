import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Nav from "./components/Nav";
import Footer from "./Footer";
import Products from "./components/Products";

const App = () => {

  return (
    <>

        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} >
            </Route>
          </Routes>
          <Footer />
        </Router>
    </>
  )
};

export default App;
