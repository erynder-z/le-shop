import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal: abortController.signal,
        });

        const fetchData = await response.json();

        setProducts(fetchData);
        setIsFetching(false);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchProducts();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="shop">
      {isFetching && <h1>FETCHING DATA</h1>}
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          /*      onClick={showProductDetails(item.id)} */
        />
      ))}
    </div>
  );
}

export default Shop;
