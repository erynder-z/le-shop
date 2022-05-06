import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductCard.css";

function ProductCard(props) {
  const { product } = props;
  const formattedPrice = (Math.round(product.price * 100) / 100).toFixed(2);
  return (
    <div className="product-card" key={product.id}>
      <Link to={`/shop/${product.id}`}>
        {/*  {product.title} */}

        <div className="product-header">
          <h3>{product.title}</h3>
        </div>
        <div className="product-body">
          <img src={product.image} alt="Product" />
        </div>

        <div className="product-price">
          <h4>Price: {formattedPrice}€</h4>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }).isRequired,
};
