import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import Dropdown from "../Dropdown/Dropdown";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Shop.css";

function Shop(props) {
  const { showCart } = props;
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

  const showProductDetails = (id) => {
    setProducts(() =>
      products.map((product) =>
        product.id === id
          ? { ...product, isInView: true }
          : { ...product, isInView: false }
      )
    );
  };

  const hideProductDetails = (id) => {
    setProducts(() =>
      products.map((product) =>
        product.id === id ? { ...product, isInView: false } : product
      )
    );
  };

  useEffect(() => {
    // get products-array from API and add isInView-key to every object
    const abortController = new AbortController();
    const url = "https://fakestoreapi.com/products";
    setIsFetching(true);
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data;
        setProducts(fetchedData.map((item) => ({ ...item, isInView: false })));
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
      <ShoppingCart showCart={showCart} />
      {isFetching && <h1>FETCHING DATA</h1>}

      {category === "all"
        ? products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              showProductDetails={showProductDetails}
              hideProductDetails={hideProductDetails}
            />
          ))
        : products
            .filter((item) => item.category === category.toLowerCase().trim())
            .map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                showProductDetails={showProductDetails}
                hideProductDetails={hideProductDetails}
              />
            ))}
    </div>
  );
}

export default Shop;

Shop.propTypes = {
  showCart: PropTypes.bool.isRequired,
};
