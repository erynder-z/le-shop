import React from "react";
import PropTypes, { shape } from "prop-types";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";
import CartItem from "../CartItem/CartItem";
import TotalPrice from "../TotalPrice/TotalPrice";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const {
    showCart,
    cartItems,
    removeItemFromCart,
    increaseAmount,
    decreaseAmount,
    toggleShowCart,
  } = props;

  const formattedPrice = (price, amount) =>
    ((Math.round(price * 100) / 100).toFixed(2) * amount).toFixed(2);

  const checkout = () => {
    alert("You have reached the end of the fake shop!");
  };

  return (
    <div className={`shopping-cart ${showCart === true ? "show-cart" : null}`}>
      <div className="cart-container">
        <div
          className="hide-cart"
          onClick={(e) => {
            toggleShowCart(e);
          }}
          onKeyDown={(e) => {
            toggleShowCart(e);
          }}
          role="button"
          tabIndex={0}
        >
          ❯
        </div>

        <div className="cart-top-container">
          <h1>Shopping Cart</h1>
          <div className="items-grid">
            <CartItem
              cartItems={cartItems}
              formattedPrice={formattedPrice}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
              removeItemFromCart={removeItemFromCart}
            />
          </div>
          {!cartItems.length > 0 && (
            <h1 className="cart-empty">
              {" "}
              <Icon path={mdiCartVariant} size={2} /> is empty
            </h1>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-bottom-container">
            <TotalPrice cartItems={cartItems} />
            <button
              className="checkoutBtn"
              onClick={checkout}
              onKeyDown={checkout}
              type="button"
              tabIndex={0}
            >
              proceed to checkout
            </button>
          </div>
        )}
      </div>
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
  toggleShowCart: PropTypes.func.isRequired,
};
