import React from "react";
import Announcement from "../../components/Announcement/Announcement.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Products from "../../components/Products/Products.jsx";
import Slider from "../../components/Slider/Slider.jsx";

function Home() {
  

  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
