import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { HashRouter } from "react-router-dom";
import Home from "./Home";

describe("Home component", () => {
  it("renders background video", () => {
    const { getByLabelText } = render(
      <HashRouter>
        <Home />
      </HashRouter>
    );

    expect(getByLabelText("video")).toBeInTheDocument();
  });

  it("renders the correct heading", () => {
    const { getByRole } = render(
      <HashRouter>
        <Home />
      </HashRouter>
    );

    expect(getByRole("heading").textContent).toMatch("Welcome to Le Shop!");
  });

  it("links to shop page", () => {
    const { getByText } = render(
      <HashRouter>
        <Home />
      </HashRouter>
    );

    const clickableElement = getByText("Explore the shop");

    expect(clickableElement).toHaveAttribute("href", "#/shop");
  });
});
