import React from "react";
import Icon from "@mdi/react";
import { mdiTrashCanOutline, mdiPlus, mdiMinus } from "@mdi/js";
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
          <Icon path={mdiMinus} size={0.75} />
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
          <Icon path={mdiPlus} size={0.75} />
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
          <Icon path={mdiTrashCanOutline} size={1} />
        </button>
      </div>
    </div>
  ));
}

export default CartItem;
