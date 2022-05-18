import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home.jsx";
import React from "react";
import Product from "./pages/Product/product.jsx";
import ProductList from "./pages/ProductList/ProductList"
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art/:id" element={<Product/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
