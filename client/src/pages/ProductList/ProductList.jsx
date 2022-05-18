import Navbar from "../../components/Navbar/Navbar.jsx";
import Announcement from "../../components/Announcement/Announcement.jsx";
import Products from "../../components/Products/Products.jsx";
import Footer from "../../components/Footer/Footer.jsx";
// import { useLocation } from "react-router";
// import { useState } from "react";
import {
    Container,
    Title,
  } from "./productListStyling.jsx"


const ProductList = () => {


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>All Products</Title>
      {/* <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color">
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" >
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select >
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer> */}
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
