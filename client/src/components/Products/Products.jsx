import { useEffect, useState } from "react";
import Product from "../Product/Product.jsx";
import {
  Container,
  ProductsContainer,
  PaginatedContainer,
} from "./ProductsStyling.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllArts } from "../../redux/Actions/ArtActions.js";
import React from "react";
import loading from "../../assent/loading.gif";
import Pagination from "@mui/material/Pagination";

const Products = () => {
  var limitPerPage = 8;
  const dispatch = useDispatch();
  const { arts } = useSelector((state) => state.ArtReducer);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllArts());
  }, [dispatch]);


  // Paginated related functions
  function paginated(model, page) {
    const start = (page - 1) * limitPerPage;
    const end = page * limitPerPage;

    return model.slice(start, end);
  }
  const count = Math.ceil(arts.length / limitPerPage);

  const handleChange = (e, v) => {
    setPage(v);
  };


  return (
    <Container>
      <ProductsContainer>
        {arts ? (
          paginated(arts, page).map((item) => (
            <Product item={item} key={item.id} />
          ))
        ) : (
          <img src={loading} alt="loading..." />
        )}
      </ProductsContainer>
      <PaginatedContainer>
        <Pagination
          count={count}
          variant="outlined"
          color="primary"
          size="large"
          page={page}
          onChange={handleChange}
        />
      </PaginatedContainer>
    </Container>
  );
};

export default Products;
