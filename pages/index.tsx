import { Button, Center } from "@chakra-ui/react";
import { Post } from "@prisma/client";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import { BlogPost } from "../models/blog-post";
import Layout from "./layout";

const LIMIT = 10;
const HomePage = (): React.ReactElement => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    fetch(`/api/posts?take=${LIMIT}&skip=${offset * LIMIT}`)
      .then((res) => res.json())
      .then((data) =>
        setPosts((currentPosts) => [...currentPosts, ...data.posts])
      );
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((currentOffset) => ++currentOffset);
  };

  return (
    <Layout>
      {posts && (
        <>
          <BlogList posts={posts}></BlogList>
          <Center>
            <Button onClick={handleLoadMore}>Load More</Button>
          </Center>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
