import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import Announcement from "../../components/Announcement/Announcement.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./CartStyling.jsx";

// import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
// import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";

// const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  var productsOnCart = useSelector((state) => state.cart);
  // const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();
  const navigate = useNavigate();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  useEffect(() => {
    // const makeRequest = async () => {
    //   try {
    //     const res = await userRequest.post("/checkout/payment", {
    //       tokenId: stripeToken.id,
    //       amount: 500,
    //     });
    //     // history.push("/success", {
    //     //   stripeData: res.data,
    //     //   products: cart, });
    //     navigate("/success", {
    //       stripeData: res.data,
    //       products: cart,
    //     });
    //   } catch {}
    // };
    // stripeToken && makeRequest();
  }, []);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          {/* <TopButton>CONTINUE SHOPPING</TopButton> */}
          <TopTexts>
            <TopText>Shopping Bag({productsOnCart ? productsOnCart.length : 0})</TopText>
            {/* <TopText>Your Wishlist (0)</TopText> */}
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image  />
                <Details>
                  <ProductName>
                    <b>Product:</b> titulo del producto
                  </ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>
                  $ 20
                </ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 50.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 450.00</SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
