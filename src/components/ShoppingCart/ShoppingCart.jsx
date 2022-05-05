import React from "react";
import PropTypes from "prop-types";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const { showCart } = props;
  return (
    <div className={`shopping-cart ${showCart === true ? "show-cart" : null}`}>
      ShoppingCart
    </div>
  );
}

export default ShoppingCart;

ShoppingCart.propTypes = {
  showCart: PropTypes.bool.isRequired,
};
