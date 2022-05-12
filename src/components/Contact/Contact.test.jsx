import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Contact from "./Contact";

describe("Contact component", () => {
  it("renders quote", () => {
    const { queryAllByRole } = render(<Contact />);

    expect(queryAllByRole("heading")[0].textContent).toMatch(
      "Belief creates the actual fact."
    );
  });

  it("renders correct headings", () => {
    const { queryAllByRole } = render(<Contact />);

    expect(queryAllByRole("heading")[2].textContent).toMatch("Address");
    expect(queryAllByRole("heading")[4].textContent).toMatch("Social");
    expect(queryAllByRole("heading")[5].textContent).toMatch("Creator");
  });

  it("links to my GitHub =)", () => {
    const { getByRole } = render(<Contact />);

    const link = getByRole("link");

    expect(link).toHaveAttribute("href", "https://github.com/erynder-z");
  });
});
