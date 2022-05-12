import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { HashRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";

describe("Nav component", () => {
  it("renders shop name", () => {
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
    const { getByRole } = render(
      <HashRouter>
        <Nav cartItems={mockCartItems} />
      </HashRouter>
    );
    expect(getByRole("heading").textContent).toMatch(/Le shop/i);
  });

  it("renders links", () => {
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
    render(
      <HashRouter>
        <Nav cartItems={mockCartItems} />
      </HashRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("calls function to get number of items in cart", () => {
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

    const getNumberOfItemsMock = jest.fn();
    getNumberOfItemsMock.mockReturnValue(1);
    render(
      <HashRouter>
        <Nav
          cartItems={mockCartItems}
          getNumberOfItems={getNumberOfItemsMock()}
        />
      </HashRouter>
    );

    expect(getNumberOfItemsMock).toHaveBeenCalled();
  });

  it("displays the number of items in cart", () => {
    const mockCartItems = [
      {
        amount: 5,
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

    render(
      <HashRouter>
        <Nav cartItems={mockCartItems} />
      </HashRouter>
    );

    const cart = screen.getByText("Cart");

    expect(cart.nextElementSibling.textContent).toBe("5");
  });

  it("calls the toggleShowCart-function when clicking on 'Cart'-element ", () => {
    const mockCartItems = [
      {
        amount: 5,
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

    const mockToggleShowCart = jest.fn();

    const { getByRole } = render(
      <HashRouter>
        <Nav cartItems={mockCartItems} toggleShowCart={mockToggleShowCart} />
      </HashRouter>
    );

    const clickableElement = getByRole("button", { name: /Cart/ });

    userEvent.click(clickableElement);

    expect(mockToggleShowCart).toHaveBeenCalled();
  });
});
