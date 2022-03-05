import { User } from "./user";

export type BlogPost = {
  id: number;
  title: string;
  abstract: string;
  author: User;
};
