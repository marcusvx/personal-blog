import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../../components/Navbar";

it("renders a heading", () => {
  render(<Navbar />);

  const heading = screen.getByRole("heading", {
    name: /marcus blog/i,
  });

  expect(heading).toBeInTheDocument();
});
