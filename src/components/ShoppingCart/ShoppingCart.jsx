import React from "react";
import PropTypes, { shape } from "prop-types";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const {
    showCart,
    cartItems,
    removeItemFromCart,
    increaseAmount,
    decreaseAmount,
  } = props;

  const formattedPrice = (price, amount) =>
    ((Math.round(price * 100) / 100).toFixed(2) * amount).toFixed(2);

  return (
    <div className={`shopping-cart ${showCart === true ? "show-cart" : null}`}>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div className="cartItem-container" key={item.id}>
          <h3 className="cartItem-title">{item.title}</h3>
          <h3 className="cartItem-price">
            {formattedPrice(item.price, item.amount)} €
          </h3>
          <div className="amount-container">
            {" "}
            <h3 className="cartItem-amount">Amount: {item.amount}</h3>
            <button
              className="decreaseAmountBtn"
              onClick={(e) => {
                decreaseAmount(item.id, e);
              }}
              onKeyDown={(e) => {
                decreaseAmount(item.id, e);
              }}
              type="button"
              tabIndex={0}
            >
              decrease
            </button>
            <button
              className="increateAmountBtn"
              onClick={(e) => {
                increaseAmount(item.id, e);
              }}
              onKeyDown={(e) => {
                increaseAmount(item.id, e);
              }}
              type="button"
              tabIndex={0}
            >
              increase
            </button>
          </div>

          <button
            className="removeItemBtn"
            onClick={(e) => {
              removeItemFromCart(item.id, e);
            }}
            onKeyDown={(e) => {
              removeItemFromCart(item.id, e);
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
  increaseAmount: PropTypes.func.isRequired,
  decreaseAmount: PropTypes.func.isRequired,
};
