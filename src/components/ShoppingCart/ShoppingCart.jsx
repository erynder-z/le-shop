import React from "react";
import PropTypes, { shape } from "prop-types";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const { showCart, cartItems } = props;
  return (
    <div className={`shopping-cart ${showCart === true ? "show-cart" : null}`}>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div className="cartItem-container">
          <h3 className="cartItem-title">{item.title}</h3>
          <h3 className="cartItem-price">{item.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;

ShoppingCart.propTypes = {
  showCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(
    shape({
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
    })
  ).isRequired,
};
