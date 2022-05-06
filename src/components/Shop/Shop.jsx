import React, { useState, useEffect } from "react";
import PropTypes, { shape } from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import Dropdown from "../Dropdown/Dropdown";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Shop.css";

function Shop(props) {
  const { showCart, cartItems, removeItemFromCart } = props;
  const options = [
    { label: "All", value: "all" },
    { label: "Mens clothing", value: "men's clothing" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
    { label: "Womens clothing", value: "women's clothing" },
  ];

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [category, setCategory] = useState("all");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const url = "https://fakestoreapi.com/products";
    setIsFetching(true);
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data;
        setProducts(fetchedData);
        setIsFetching(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="shop">
      <Dropdown
        label="filter by category "
        options={options}
        value={category}
        onChange={handleChange}
      />
      <ShoppingCart
        showCart={showCart}
        cartItems={cartItems}
        removeItemFromCart={(itemID) => {
          removeItemFromCart(itemID);
        }}
      />
      {isFetching && <h1>FETCHING DATA</h1>}
      {!isFetching &&
        (category === "all"
          ? products.map((item) => <ProductCard key={item.id} product={item} />)
          : products
              .filter((item) => item.category === category.toLowerCase().trim())
              .map((item) => <ProductCard key={item.id} product={item} />))}
    </div>
  );
}

export default Shop;

Shop.propTypes = {
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
};
