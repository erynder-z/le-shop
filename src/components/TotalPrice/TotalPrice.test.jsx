import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TotalPrice from "./TotalPrice";

describe("TotalPrice component", () => {
  it("show correct subtotal, VAT and total price for one item", () => {
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

    render(<TotalPrice cartItems={mockCartItems} />);

    const subtotal = screen.getByText("Subtotal without VAT:");
    const vat = screen.getByText("VAT:");
    const total = screen.getByText("TOTAL:");

    expect(subtotal.nextElementSibling.textContent).toBe("92.39 €");
    expect(vat.nextElementSibling.textContent).toBe("17.56 €");
    expect(total.nextElementSibling.textContent).toBe("109.95 €");
  });

  it("show correct subtotal, VAT and total price for multiple items", () => {
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

    render(<TotalPrice cartItems={mockCartItems} />);

    const subtotal = screen.getByText("Subtotal without VAT:");
    const vat = screen.getByText("VAT:");
    const total = screen.getByText("TOTAL:");

    expect(subtotal.nextElementSibling.textContent).toBe("134.41 €");
    expect(vat.nextElementSibling.textContent).toBe("25.54 €");
    expect(total.nextElementSibling.textContent).toBe("159.95 €");
  });

  it("show correct subtotal, VAT and total price for multiple items and amounts", () => {
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

    render(<TotalPrice cartItems={mockCartItems} />);

    const subtotal = screen.getByText("Subtotal without VAT:");
    const vat = screen.getByText("VAT:");
    const total = screen.getByText("TOTAL:");

    expect(subtotal.nextElementSibling.textContent).toBe("310.84 €");
    expect(vat.nextElementSibling.textContent).toBe("59.06 €");
    expect(total.nextElementSibling.textContent).toBe("369.90 €");
  });
});
