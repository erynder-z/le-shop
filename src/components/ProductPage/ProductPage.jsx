import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductPage.css";

function ProductPage(props) {
  const { addItemToCart } = props;
  const [product, setProduct] = useState({
    id: 1,
    title: "...",
    price: "...",
    category: "...",
    description: "...",
    image: "...",
    rating: {
      rate: "",
      count: "",
    },
  });
  const [isFetching, setIsFetching] = useState(false);
  // get id of the item from the route provider
  const { id } = useParams();
  const formattedPrice = (Math.round(product.price * 100) / 100).toFixed(2);

  const passItem = (e) => {
    addItemToCart(product, e);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const url = `https://fakestoreapi.com/products/${id}`;
    setIsFetching(true);
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data;
        setProduct(fetchedData);
        setIsFetching(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="product-page">
      {isFetching && <h1>FETCHING DATA</h1>}

      {!isFetching && (
        <div className="detail-card">
          <Link to="/shop" className="backBtn">
            &#8592; back to shop
          </Link>
          <div className="product-header">
            <h3>{product.title}</h3>
          </div>
          <div className="product-body">
            <img src={product.image} alt="Product" />
          </div>
          <p className="product-description">{product.description}</p>
          <h4 className="rating">User rating: {product.rating.rate} / 5.0</h4>
          <div className="product-rating">
            Based on {product.rating.count} reviews.{" "}
          </div>
          <div className="product-price">
            <h4>Price: {formattedPrice}€</h4>
          </div>
          <button
            className="addToCartBtn"
            onClick={(e) => {
              passItem(e);
            }}
            onKeyDown={(e) => {
              passItem(e);
            }}
            type="button"
            tabIndex={0}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductPage;

ProductPage.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
};
