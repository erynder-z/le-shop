import { render, screen, act } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import ProductPage from "./ProductPage";

describe("ProductPage component", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        id: 1,
        title: "lorem item",
        price: 10.1,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches the product list from API on mount", async () => {
    await act(async () =>
      render(
        <HashRouter>
          <ProductPage />
        </HashRouter>
      )
    );

    expect(screen.getByText(/lorem item/)).toBeInTheDocument();
  });

  it("displays the correct number of stars", async () => {
    const { queryAllByTestId } = await act(async () =>
      render(
        <HashRouter>
          <ProductPage />
        </HashRouter>
      )
    );

    const star = queryAllByTestId("star");

    expect(star.length).toBe(4);
  });

  it("displays formatted price", async () => {
    const { getByRole } = await act(async () =>
      render(
        <HashRouter>
          <ProductPage />
        </HashRouter>
      )
    );

    const price = getByRole("heading", { name: /Price: / });

    expect(price.textContent).toBe("Price: 10.10€");
  });
});
