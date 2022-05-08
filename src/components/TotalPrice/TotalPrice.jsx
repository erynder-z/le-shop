import React from "react";
import PropTypes, { shape } from "prop-types";
import "./TotalPrice.css";

function TotalPrice(props) {
  const { cartItems } = props;

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const { price, amount } = item;
      totalPrice += price * amount;
    });
    return {
      ttl: totalPrice.toFixed(2),
      sub: (totalPrice - (totalPrice - totalPrice / 1.19)).toFixed(2),
      tax: (totalPrice - totalPrice / 1.19).toFixed(2),
    };
  };

  return (
    <div className="price-container">
      <div className="subttl-amount-container">
        <div className="subttl-amount-text">Subtotal without VAT: </div>
        <div className="subttl-amount-number">{getTotalPrice().sub} €</div>
      </div>
      <div className="tax-amount-container">
        <div className="tax-amount-text">VAT: </div>
        <div className="tax-amount-number">{getTotalPrice().tax} €</div>
      </div>
      <div className="ttl-container">
        <h1 className="total-amount-text">TOTAL: </h1>
        <h1 className="total-amount-number">{getTotalPrice().ttl} €</h1>
      </div>
    </div>
  );
}

export default TotalPrice;

TotalPrice.propTypes = {
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
