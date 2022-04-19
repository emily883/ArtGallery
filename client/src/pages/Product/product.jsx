import React from "react";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/Announcement/Announcement.jsx";
// import Footer from "../../components/";
// import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./productStyling";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { GetoneArt } from "../../redux/Actions/ArtActions.js";

const Product = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { getArt } = useSelector((state) => state.ArtReducer);

  useEffect(() => {
    dispatch(GetoneArt(id));
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={getArt.images[0].image_url} />
        </ImgContainer>
        <InfoContainer>
          <Title>{getArt.title}</Title>
          <Desc>{getArt.description}</Desc>
          <Price>$ {getArt.price}</Price>
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          <AddContainer>
            <AmountContainer>
              {/* <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} /> */}
            </AmountContainer>
            {/* <Button onClick={handleClick}>ADD TO CART</Button> */}
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
