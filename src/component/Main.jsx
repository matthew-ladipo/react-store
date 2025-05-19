import React, { useState } from "react";
import Header from "./module/Header";
import Footer from "./module/Footer";
import { Route, Routes } from "react-router-dom";
import ProductLists from "./module/ProductLists";
import Men from "../component/products/Men";
import Women from "../component/products/Women";
import Jeweries from "../component/products/Jeweries";
import Electronics from "../component/products/Electronics";
import ProductDetails from "../component/module/ProductDetails";
import Cart from "./products/Carts";
import Contact from "./Contact";
import About from "./About";
const Main = () => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = () => {
    setCart([]);
  };

  // Remove a single product from cart by id without refreshing the page
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductLists />} />
        <Route path="/men" element={<Men onAddToCart={handleAddToCart} />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewelries" element={<Jeweries />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route
          path="/product/:productId"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} onRemoveAll={handleRemoveFromCart} remove={handleRemoveItem} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
