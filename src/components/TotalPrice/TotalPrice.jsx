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
      <h3 className="tax-amount">
        Subtotal without VAT: {getTotalPrice().sub} €
      </h3>
      <h3 className="tax-amount">VAT: {getTotalPrice().tax} €</h3>
      <div className="ttl-container">
        <h1 className="total-amount">TOTAL: {getTotalPrice().ttl} €</h1>
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
