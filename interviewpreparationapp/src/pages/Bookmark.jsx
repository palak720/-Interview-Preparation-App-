import { useSelector } from "react-redux";
import { Box, Text, VStack } from "@chakra-ui/react";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmark.bookmarkedQuestions);

  return (
    <VStack spacing={4}>
      <Text fontSize="xl">Bookmarked Questions</Text>
      {bookmarks.map((question, index) => (
        <Box key={index} p={4} shadow="md" borderWidth="1px">
          <Text>{question}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Bookmark;
