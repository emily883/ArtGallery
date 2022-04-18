import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home.jsx";
import React from "react";
import Product from "./pages/Product/product.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art/:id" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
