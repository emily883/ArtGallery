import React from "react";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/Announcement/Announcement.jsx";
// import Footer from "../../components/";
// import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const getProduct = async () => {
  //       try {
  //         const res = await publicRequest.get("/products/find/" + id);
  //         setProduct(res.data);
  //       } catch {}
  //     };
  //     getProduct();
  //   }, [id]);

  //   const handleQuantity = (type) => {
  //     if (type === "dec") {
  //       quantity > 1 && setQuantity(quantity - 1);
  //     } else {
  //       setQuantity(quantity + 1);
  //     }
  //   };

  //   const handleClick = () => {
  //     dispatch(
  //       addProduct({ ...product, quantity, color, size })
  //     );
  //   };
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>titulo</Title>
          <Desc>descripcion</Desc>
          <Price>$ precio</Price>
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
            <Button >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
      
    </Container>
  );
};

export default Product;
