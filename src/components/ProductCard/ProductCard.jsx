import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

function ProductCard(props) {
  const { product, showProductDetails } = props;
  const formattedPrice = (Math.round(product.price * 100) / 100).toFixed(2);
  return (
    <div
      className={`product-card ${product.isInView === true ? "inView" : null}`}
      key={product.id}
      onClick={(e) => {
        showProductDetails(product.id, e);
      }}
      onKeyDown={(e) => {
        showProductDetails(product.id, e);
      }}
      role="button"
      tabIndex={0}
    >
      <div className="product-header">
        <h3>{product.title}</h3>
      </div>
      <div className="product-body">
        <img src={product.image} alt="Product" />
      </div>
      {product.isInView === true && (
        <>
          <p className="product-description">{product.description}</p>
          <h4 className="rating">User rating: {product.rating.rate} / 5.0</h4>
          <div className="product-rating">
            Based on {product.rating.count} reviews.{" "}
          </div>
        </>
      )}
      <div className="product-price">
        <h4>Price: {formattedPrice}€</h4>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  showProductDetails: PropTypes.func.isRequired,
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
    isInView: PropTypes.bool,
  }).isRequired,
};
