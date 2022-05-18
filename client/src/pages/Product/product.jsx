import React from "react";
// import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import loading from "../../assent/loading.gif";

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  // FilterContainer,
  // Filter,
  // FilterTitle,
  // FilterColor,
  // FilterSize,
  // FilterSizeOption,
  AddContainer,
  // AmountContainer,
  // Amount,
  Button,
  // ButtonAmount,
} from "./productStyling";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { GetoneArt } from "../../redux/Actions/ArtActions.js";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/Actions/CartAction.js";

const Product = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  const dispatch = useDispatch();
  const { getArt } = useSelector((state) => state.ArtReducer);
  const { storage } = useSelector((store) => store.storageReducer);
  var checkItemsOnCart = useRef(false);

  const addCart = () => {
    dispatch(addItemToCart(getArt));
  };

  const removeCart = () => {
    dispatch(removeItemFromCart(getArt));
  };

  useEffect(() => {
    dispatch(GetoneArt(id));
  }, [dispatch, id]);

  useEffect(() => {
    // eslint-disable-next-line
    if (getArt.id === id) {
      storage.map((item) => {
        if (item[0].id === getArt.id) {
          console.log("si ta lptm");
          checkItemsOnCart.current = true;
        } else {
          console.log("entra");
          checkItemsOnCart.current = false;
        }
        return checkItemsOnCart;
      });
    }else{
      console.log("no es el mismo");
    }

    console.log("ejecuta", checkItemsOnCart.current);
  });

  return (
    <Container>
      <Navbar />
      {getArt.title ? (
        <Wrapper>
          <ImgContainer>
            <Image src={getArt.images[0].image_url} />
          </ImgContainer>
          <InfoContainer>
            <Title>{getArt.title}</Title>
            <Desc>{getArt.description}</Desc>
            <Price>$ {getArt.price}</Price>
            <AddContainer>
              {checkItemsOnCart.current ? (
                <Button
                  onClick={() => {
                    removeCart();
                  }}
                >
                  Remove From Cart
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    addCart();
                  }}
                >
                  Add to Cart
                </Button>
              )}
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      ) : (
        <img src={loading} alt="Loading..." />
      )}

      {/* <ImgContainer>
          <Image  />
        </ImgContainer>
        <InfoContainer>
          <Title>titulo</Title>
          <Desc>descridfghgrewqrtet wegw egsefg sergwergzr gawe we wefg wegwefgweg erg efgr erg efg wegpcion</Desc>
          <Price>$ 10.99</Price>
          <AddContainer>
            <Button >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer> */}
      {/* <ImgContainer>
          <Image src={getArt.images[0].image_url} />
        </ImgContainer>
        <InfoContainer>
          <Title>{getArt.title}</Title>
          <Desc>{getArt.description}</Desc>
          <Price>$ {getArt.price}</Price>
          <FilterContainer>
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
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer> */}

      <Footer />
    </Container>
  );
};

export default Product;
