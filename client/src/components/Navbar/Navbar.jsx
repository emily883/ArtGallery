import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
  AllProducts,
} from "./NavbarStyling.jsx";

const Navbar = () => {
  const { storage } = useSelector((state) => state.storageReducer);
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
          <Link to="/products">
            <AllProducts>All Products</AllProducts>
          </Link>
        </Left>
        <Center>
          <Link to="/">
            <Logo>LOGO.</Logo>
          </Link>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem> */}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={storage.length} color="primary">
                <Badge color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
