import { HStack, SpaceProps, Tag } from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={1} marginTop={props.marginTop} wrap="wrap" alignItems={"center"}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="subtle"
            colorScheme="orange"
            key={tag}
            mt={1}
            mb={1}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default BlogTags;
