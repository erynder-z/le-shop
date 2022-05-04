import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
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

  return (
    <div className="shop">
      {isFetching && <h1>FETCHING DATA</h1>}
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Shop;
