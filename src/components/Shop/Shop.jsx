import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiSync } from "@mdi/js";
import ProductCard from "../ProductCard/ProductCard";
import Dropdown from "../Dropdown/Dropdown";
import "./Shop.css";

function Shop() {
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
        label="Filter products by category "
        options={options}
        value={category}
        onChange={handleChange}
      />
      {isFetching && (
        <div className="loading">
          <Icon path={mdiSync} size={5} horizontal spin />
          <p>getting items</p>
        </div>
      )}
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
