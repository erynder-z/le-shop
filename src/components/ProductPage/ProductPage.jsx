import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiStar, mdiSync, mdiCartArrowDown } from "@mdi/js";
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

  const getStars = () => {
    const ratestars = Math.round(product.rating.rate);

    const stars = [];
    for (let i = 0; i < ratestars; i += 1) {
      stars.push(
        <Icon key={i} path={mdiStar} size={1} color="red" data-testid="star" />
      );
    }
    return <div className="Stars">{stars}</div>;
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
      {isFetching && (
        <div className="loading">
          <Icon path={mdiSync} size={5} horizontal spin />
          <p>getting items</p>
        </div>
      )}

      {!isFetching && (
        <div className="product-container">
          <Link to="/shop" className="backBtn">
            &#8592; back to shop
          </Link>
          <div className="detail-card">
            <div className="product-header">
              <h1>{product.title}</h1>
            </div>
            <div className="product-body">
              <img src={product.image} alt="Product" />
            </div>
            <p className="product-description">{product.description}</p>
            <h4 className="rating">User rating: {product.rating.rate} / 5.0</h4>
            <div className="Stars">{getStars()}</div>
            <div className="product-rating">
              Based on {product.rating.count} reviews.{" "}
            </div>
            <div className="product-price">
              <h2>Price: {formattedPrice}€</h2>
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
              Add to cart{" "}
              <Icon className="cartIcn" path={mdiCartArrowDown} size={1} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;

ProductPage.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
};
