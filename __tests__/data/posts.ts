import faker from "@faker-js/faker";

const POSTS = [
  {
    id: 1,
    title: "First Post",
    abstract: "First post test here",
    author: {
      firstName: "John",
      lastName: "Doe",
    },
  },
  {
    id: 2,
    title: "Second Post",
    abstract: "Second post test here",
    author: {
      firstName: "Jane",
      lastName: "Doe",
    },
  },
  {
    id: 3,
    title: "Third Post",
    abstract: "Third post test here",
    author: {
      firstName: "John",
      lastName: "Doe",
    },
  },
];

export { POSTS };
