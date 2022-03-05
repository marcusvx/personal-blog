import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogList from "../../components/BlogList";
import { POSTS } from "../data/posts";

describe("BlogListComponent", () => {
  it("renders a secondary title", () => {
    render(<BlogList posts={POSTS} />);

    const heading = screen.getByRole("heading", {
      name: /latest articles/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
