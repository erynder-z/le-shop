import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems(() => [...cartItems, item]);
  };

  const removeItemFromCart = (itemID) => {
    setCartItems(() => cartItems.filter((item) => item.id !== itemID));
  };

  const toggleShowCart = (e) => {
    if (showCart) {
      setShowCart(false);
    } else if (!showCart) {
      setShowCart(true);
    }
    e.target.blur();
  };

  return (
    <div className="app">
      <Nav toggleShowCart={toggleShowCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              showCart={showCart}
              cartItems={cartItems}
              removeItemFromCart={(itemID) => {
                removeItemFromCart(itemID);
              }}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/shop/:id"
          element={
            <ProductPage
              showCart={showCart}
              cartItems={cartItems}
              addItemToCart={addItemToCart}
              removeItemFromCart={(itemID) => {
                removeItemFromCart(itemID);
              }}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
