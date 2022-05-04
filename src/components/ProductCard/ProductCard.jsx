import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

function ProductCard(props) {
  const { product } = props;
  const formattedPrice = (Math.round(product.price * 100) / 100).toFixed(2);
  return (
    <div className="product-card">
      <div className="product-header">
        <h3>{product.title}</h3>
      </div>
      <div className="product-body">
        <img src={product.image} alt="Product" />
        <h4 className="product-price">Price: {formattedPrice}€</h4>
      </div>
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
  }).isRequired,
};
