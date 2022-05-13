import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import { HashRouter } from "react-router-dom";
import Shop from "./Shop";

describe("Nav component", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue([
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
      ]),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches the product list from API on mount", async () => {
    await act(async () =>
      render(
        <HashRouter>
          <Shop />
        </HashRouter>
      )
    );
    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument();
  });

  it("filters products by category", async () => {
    await act(async () =>
      render(
        <HashRouter>
          <Shop />
        </HashRouter>
      )
    );

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Mens clothing" })
    );
    expect(screen.getByRole("option", { name: "Mens clothing" }).selected).toBe(
      true
    );

    expect(screen.queryByText(/Fjallraven/)).toBeInTheDocument();
    expect(screen.queryByText(/some other item/)).not.toBeInTheDocument();
  });
});

describe("Nav component", () => {
  it("displays message while fetching from API", async () => {
    await act(async () =>
      render(
        <HashRouter>
          <Shop />
        </HashRouter>
      )
    );
    expect(screen.getByText(/getting items/)).toBeInTheDocument();
  });
});
