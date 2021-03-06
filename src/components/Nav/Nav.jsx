import React, { useState, useEffect } from "react";
import PropTypes, { shape } from "prop-types";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { toggleShowCart, cartItems } = props;

  const [clicked, setClicked] = useState(false);

  const getNumberOfItems = () => {
    let totalItems = 0;
    cartItems.forEach((item) => {
      const { amount } = item;
      totalItems += amount;
    });

    return totalItems;
  };

  useEffect(() => {
    setClicked(true);
    const timer = setTimeout(() => setClicked(false), 100);
    return () => clearTimeout(timer);
  }, [cartItems]);

  return (
    <nav className="navbar">
      <h3>Le Shop</h3>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <div
          className="cart-link"
          onClick={(e) => {
            toggleShowCart(e);
          }}
          onKeyDown={(e) => {
            toggleShowCart(e);
          }}
          role="button"
          tabIndex={0}
        >
          <div className="nav-cart-container">
            <span className="nav-cart-text">Cart</span>
            <div className={`bubble ${clicked ? "enlarge" : null}`}>
              {getNumberOfItems()}
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;

Nav.propTypes = {
  toggleShowCart: PropTypes.func.isRequired,
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
