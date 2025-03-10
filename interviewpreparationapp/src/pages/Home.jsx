



import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={10}>
      <Heading>Welcome to Interview Prep App</Heading>
      <Text mt={4}>Enhance your interview skills with our quizzes and discussions!</Text>

      <Button onClick={() => navigate("/quiz")} mt={4} colorScheme="blue">
        Start Quiz
      </Button>
      <Button onClick={() => navigate("/discussion")} mt={4} ml={2} colorScheme="green">
        Discussion Forum
      </Button>
      <Button onClick={() => navigate("/ai-questions")} mt={4} colorScheme="purple">
        AI Generate Question
      </Button>
      <Button onClick={() => navigate("/mock-interview")} mt={4} colorScheme="red">
        Mock Interview
      </Button>
      <Button onClick={() => navigate("/progress-tracker")} mt={4} colorScheme="orange">
        Progress Tracker
      </Button>
    </Box>
  );
};

export default Home;


