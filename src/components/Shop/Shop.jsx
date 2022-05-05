import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const showProductDetails = (id) => {
    setProducts(() =>
      products.map((product) =>
        product.id === id
          ? { ...product, isInView: true }
          : { ...product, isInView: false }
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
      {isFetching && <h1>FETCHING DATA</h1>}
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          showProductDetails={showProductDetails}
        />
      ))}
    </div>
  );
}

export default Shop;
