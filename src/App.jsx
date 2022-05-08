import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, e) => {
    let newItem = item;

    const foundIndex = cartItems.findIndex((x) => x.id === item.id);
    const foundItem = cartItems[foundIndex];

    if (!foundItem) {
      newItem.amount = 1;
    } else {
      setCartItems(cartItems.splice(foundIndex, 1));
      foundItem.amount += 1;
      newItem = foundItem;
    }
    setCartItems(() => [...cartItems, newItem]);
    e.target.blur();
  };

  const removeItemFromCart = (itemID, e) => {
    setCartItems(() => cartItems.filter((item) => item.id !== itemID));
    e.target.blur();
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
              removeItemFromCart={(itemID, e) => {
                removeItemFromCart(itemID, e);
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
              addItemToCart={(item, e) => {
                addItemToCart(item, e);
              }}
              removeItemFromCart={(itemID, e) => {
                removeItemFromCart(itemID, e);
              }}
            />
          }
        />
      </Routes>
      <ShoppingCart
        showCart={showCart}
        cartItems={cartItems}
        removeItemFromCart={(itemID, e) => {
          removeItemFromCart(itemID, e);
        }}
      />
    </div>
  );
}

export default App;
