import { ChakraProvider } from "@chakra-ui/react";

const BlogApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps}></Component>
    </ChakraProvider>
  );
};

export default BlogApp;
