import React from "react";
import PropTypes, { shape } from "prop-types";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const { showCart, cartItems, removeItemFromCart } = props;

  return (
    <div className={`shopping-cart ${showCart === true ? "show-cart" : null}`}>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div className="cartItem-container" key={item.id}>
          <h3 className="cartItem-title">{item.title}</h3>
          <h3 className="cartItem-price">{item.price}</h3>
          <button
            className="removeItemBtn"
            onClick={() => {
              removeItemFromCart(item.id);
            }}
            onKeyDown={() => {
              removeItemFromCart(item.id);
            }}
            type="button"
            tabIndex={0}
          >
            Delete item
          </button>
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
  removeItemFromCart: PropTypes.func.isRequired,
};
