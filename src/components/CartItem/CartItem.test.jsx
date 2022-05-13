import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import CartItem from "./CartItem";

describe("CartItem component", () => {
  it("renders all items in the cart", () => {
    const mockCartItems = [
      {
        amount: 2,
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
        amount: 3,
        id: 2,
        title: "some other item",
        price: 50.0,
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

    const mockFormattedPrice = jest.fn();
    const mockIncreaseAmount = jest.fn();
    const mockDecreaseAmount = jest.fn();
    const mockRemoveItemFromCart = jest.fn();

    render(
      <CartItem
        cartItems={mockCartItems}
        formattedPrice={mockFormattedPrice}
        increaseAmount={mockIncreaseAmount}
        decreaseAmount={mockDecreaseAmount}
        removeItemFromCart={mockRemoveItemFromCart}
      />
    );

    const item1 = screen.getByText(/Fjallraven/);
    const item2 = screen.getByText(/some other item/);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  it("calls increaseAmount function when corresponding button is clicked", () => {
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

    const mockFormattedPrice = jest.fn();
    const mockIncreaseAmount = jest.fn();
    const mockDecreaseAmount = jest.fn();
    const mockRemoveItemFromCart = jest.fn();

    render(
      <CartItem
        cartItems={mockCartItems}
        formattedPrice={mockFormattedPrice}
        increaseAmount={mockIncreaseAmount}
        decreaseAmount={mockDecreaseAmount}
        removeItemFromCart={mockRemoveItemFromCart}
      />
    );

    const clickableElement = screen.queryAllByRole("button")[1];

    userEvent.click(clickableElement);

    expect(mockIncreaseAmount).toHaveBeenCalled();
  });

  it("calls decreaseAmout function when corresponding button is clicked", () => {
    const mockCartItems = [
      {
        amount: 2,
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

    const mockFormattedPrice = jest.fn();
    const mockIncreaseAmount = jest.fn();
    const mockDecreaseAmount = jest.fn();
    const mockRemoveItemFromCart = jest.fn();

    render(
      <CartItem
        cartItems={mockCartItems}
        formattedPrice={mockFormattedPrice}
        increaseAmount={mockIncreaseAmount}
        decreaseAmount={mockDecreaseAmount}
        removeItemFromCart={mockRemoveItemFromCart}
      />
    );

    const clickableElement = screen.queryAllByRole("button")[0];

    userEvent.click(clickableElement);

    expect(mockDecreaseAmount).toHaveBeenCalled();
  });

  it("calls removeItemFromCart function when corresponding button is clicked", () => {
    const mockCartItems = [
      {
        amount: 2,
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

    const mockFormattedPrice = jest.fn();
    const mockIncreaseAmount = jest.fn();
    const mockDecreaseAmount = jest.fn();
    const mockRemoveItemFromCart = jest.fn();

    render(
      <CartItem
        cartItems={mockCartItems}
        formattedPrice={mockFormattedPrice}
        increaseAmount={mockIncreaseAmount}
        decreaseAmount={mockDecreaseAmount}
        removeItemFromCart={mockRemoveItemFromCart}
      />
    );

    const clickableElement = screen.queryAllByRole("button")[2];

    userEvent.click(clickableElement);

    expect(mockRemoveItemFromCart).toHaveBeenCalled();
  });
});
