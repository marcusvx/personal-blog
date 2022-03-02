import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../pages/index";

const POSTS = [
  {
    id: 1,
    title: "First Post",
    abstract: "First post test here",
  },
  {
    id: 2,
    title: "Second Post",
    abstract: "Second post test here",
  },
  {
    id: 3,
    title: "Third Post",
    abstract: "Third post test here",
  },
];
describe("Home", () => {
 
  it("renders a secondary title", () => {
    render(<HomePage posts={POSTS} />);

    const heading = screen.getByRole("heading", {
      name: /latest stories/i,
    });

    expect(heading).toBeInTheDocument();
  });

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
