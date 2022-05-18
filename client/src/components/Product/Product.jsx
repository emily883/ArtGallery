import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Container, Info, Icon, Image, Circle, Button} from "./ProductStyling.jsx";
import React from "react";
import { addItemToCart } from "../../redux/Actions/CartAction.js";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const {storage} = useSelector((store) => store.storageReducer)

  const addCart = () => {
    dispatch(addItemToCart(item));
  };


  return (
    <Container>
      <Circle />
      <Image src={item.images[0].image_url} />
      <Info>
        <Button onClick={() => addCart()}>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
        </Button>
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
