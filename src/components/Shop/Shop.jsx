import React, { useState, useEffect } from "react";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function fetchProducts() {
    setIsFetching(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);

      const fetchData = await response.json();
      setProducts(() => fetchData);
      setIsFetching(false);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="shop" />;
}

export default Shop;
