import { HStack, Image, Text } from "@chakra-ui/react";
import { User } from "../../models/user";

interface BlogAuthorProps {
  date: Date;
  author: User;
}

const BlogAuthor: React.FC<BlogAuthorProps> = ({ date, author }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">
        {author.firstName} {author.lastName}
      </Text>
      <Text>—</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </HStack>
  );
};

export default BlogAuthor;
