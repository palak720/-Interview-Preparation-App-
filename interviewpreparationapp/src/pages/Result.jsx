import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <VStack spacing={6} p={6} align="center">
      <Heading size="lg">Quiz Completed!</Heading>
      <Text fontSize="xl">
        Your Score: {score} / {total}
      </Text>
      <Button colorScheme="teal" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </VStack>
  );
};

export default Result;
