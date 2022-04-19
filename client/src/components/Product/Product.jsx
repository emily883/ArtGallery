import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Container, Info, Icon, Image, Circle } from "./ProductStyling.jsx";
import React from "react";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.images[0].image_url} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/art/${item.id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        {/* <Icon>
          <FavoriteBorderOutlined />
        </Icon> */}
      </Info>
    </Container>
  );
};

export default Product;
