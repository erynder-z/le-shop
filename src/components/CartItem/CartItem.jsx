import React from "react";
import "./CartItem.css";

function CartItem(props) {
  const {
    cartItems,
    formattedPrice,
    increaseAmount,
    decreaseAmount,
    removeItemFromCart,
  } = props;

  return cartItems.map((item) => (
    <div className="cartItem-container" key={item.id}>
      <h3 className="cartItem-title">{item.title}</h3>
      <h3 className="cartItem-price">
        {formattedPrice(item.price, item.amount)} €
      </h3>
      Amount:
      <div className="amount-container">
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
          -
        </button>{" "}
        <div className="cartItem-amount">{item.amount}</div>
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
          +
        </button>
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
    </div>
  ));
}

export default CartItem;
