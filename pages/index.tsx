import { Post } from "@prisma/client";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import { BlogPost } from "../models/blog-post";
import Layout from "./layout";

const HomePage = (): React.ReactElement => {
  const [posts, setPosts] = useState<BlogPost[]>();

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, [posts]);

  return <Layout>{posts && <BlogList posts={posts}></BlogList>}</Layout>;
};

export default HomePage;
