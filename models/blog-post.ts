import { BlogTag } from "./blog-tag";
import { User } from "./user";

export type BlogPost = {
  id: number;
  title: string;
  abstract: string;
  author: User;
  tags: ReadonlyArray<BlogTag>;
};
