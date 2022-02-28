import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /blog is alive!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
