import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { toggleShowCart } = props;
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
          Cart
        </div>
      </ul>
    </nav>
  );
}

export default Nav;

Nav.propTypes = {
  toggleShowCart: PropTypes.func.isRequired,
};
