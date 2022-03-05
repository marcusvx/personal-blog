import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Container,
} from "@chakra-ui/react";
import { BlogPost } from "../../models/blog-post";
import BlogTags from "../BlogTags";
import BlogAuthor from "../BlogAuthor";

type BlogListProps = {
  posts: BlogPost[];
};

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {posts.map(({ id, title, abstract, author }) => (
          <WrapItem
            width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
            key={id}
          >
            <Box w="100%" as="article">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {title}
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                {abstract}
              </Text>
              <BlogAuthor
                author={author}
                date={new Date("2021-04-06T19:01:27Z")}
              />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

export default BlogList;
