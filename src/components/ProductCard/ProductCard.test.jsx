import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import ProductCard from "./ProductCard";

describe("ProductCard component", () => {
  it("renders product correctly", () => {
    const mockProduct = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    const mockFormattedPrice = jest.fn();

    const { getByAltText } = render(
      <HashRouter>
        <ProductCard
          product={mockProduct}
          formattedPrice={mockFormattedPrice}
        />
      </HashRouter>
    );

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument();

    const image = getByAltText(
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    );
    expect(image).toBeInTheDocument();
  });

  it("renders the correct product link", () => {
    const mockProduct = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    const mockFormattedPrice = jest.fn();

    const { getByRole } = render(
      <HashRouter>
        <ProductCard
          product={mockProduct}
          formattedPrice={mockFormattedPrice}
        />
      </HashRouter>
    );

    const link = getByRole("link");

    expect(link).toHaveAttribute("href", "#/shop/1");
  });
});
