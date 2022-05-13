import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart component", () => {
  it("shows message when cart is empty", () => {
    const mockCartItems = [];
    render(<ShoppingCart cartItems={mockCartItems} />);

    expect(screen.getByRole("heading", { name: /empty/ })).toBeInTheDocument();
  });

  it("does not show empty cart message when an item is in cart", () => {
    const mockCartItems = [
      {
        amount: 1,
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
      },
    ];
    render(<ShoppingCart cartItems={mockCartItems} />);

    expect(
      screen.queryByRole("heading", { name: /empty/ })
    ).not.toBeInTheDocument();
  });

  it("does show an item in the cart", () => {
    const mockCartItems = [
      {
        amount: 1,
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
      },
    ];
    render(<ShoppingCart cartItems={mockCartItems} />);

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument();
  });

  it("does show all items in the cart", () => {
    const mockCartItems = [
      {
        amount: 1,
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
      },
      {
        amount: 1,
        id: 2,
        title: "some other item",
        price: 109.95,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consequatur!",
        category: "lorem item",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    ];
    render(<ShoppingCart cartItems={mockCartItems} />);

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument();
    expect(screen.getByText(/some other item/)).toBeInTheDocument();
  });

  it("does not show a checkout button when cart is empty", () => {
    const mockCartItems = [];
    render(<ShoppingCart cartItems={mockCartItems} />);

    expect(
      screen.queryByRole("button", { name: /proceed to checkout/ })
    ).not.toBeInTheDocument();
  });

  it("does show a checkout button when cart is not empty", () => {
    const mockCartItems = [
      {
        amount: 1,
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
      },
      {
        amount: 1,
        id: 2,
        title: "some other item",
        price: 109.95,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consequatur!",
        category: "lorem item",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    ];
    render(<ShoppingCart cartItems={mockCartItems} />);

    expect(
      screen.getByRole("button", { name: /proceed to checkout/ })
    ).toBeInTheDocument();
  });

  it("hides the shopping cart when toggle is clicked", () => {
    const mockCartItems = [
      {
        amount: 1,
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
      },
    ];

    const toggleShowCartMock = jest.fn();

    render(
      <ShoppingCart
        cartItems={mockCartItems}
        toggleShowCart={toggleShowCartMock}
      />
    );

    const clickableElement = screen.getByRole("button", { name: "❯" });

    userEvent.click(clickableElement);

    expect(toggleShowCartMock).toHaveBeenCalled();
  });
});
