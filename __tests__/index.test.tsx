import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../pages/index";
import { POSTS } from "./data/posts";


describe("Home", () => {
  it("render posts heading", async () => {
    const { findAllByRole } = render(<HomePage posts={POSTS} />);
    const posts = await findAllByRole("article");

    ["First", "Second", "Third"].forEach((post, index) => {
      const heading = within(posts[index]).getByRole("heading", {
        name: `${post} Post`,
      });
      expect(heading).toBeInTheDocument();
    });
    expect(posts.length).toEqual(3);
  });

  it("render posts content", async () => {
    const { findAllByRole } = render(<HomePage posts={POSTS} />);
    const posts = await findAllByRole("article");

    ["First", "Second", "Third"].forEach((post, index) => {
      const paragraph = within(posts[index]).getByText(
        `${post} post test here`
      );
      expect(paragraph).toBeInTheDocument();
    });
    expect(posts.length).toEqual(3);
  });
});
