import { useState } from "react";
import { generateAIResponse } from "../utils/openai"; // ✅ Correct import
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const MockInterview = () => {
  const [question, setQuestion] = useState("Describe your experience with React.");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  // Speech Recognition Setup
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      setResponse(event.results[0][0].transcript);
    };
  };

  // AI Feedback Generation using generateAIResponse
  const getFeedback = async () => {
    if (!response) {
      alert("Please provide a response before getting feedback.");
      return;
    }

    try {
      const prompt = `Evaluate this interview answer: "${response}". Provide constructive feedback.`;
      const aiFeedback = await generateAIResponse(prompt); // ✅ Use generateAIResponse function

      if (aiFeedback) {
        setFeedback(aiFeedback);
      } else {
        console.error("No feedback received from AI.");
      }
    } catch (error) {
      console.error("Error getting feedback:", error);
    }
  };

  return (
    <VStack spacing={4} p={4} boxShadow="md" borderRadius="lg">
      <Text fontSize="xl">Mock Interview</Text>
      <Text fontWeight="bold">{question}</Text>
      <Button colorScheme="blue" onClick={startListening}>
        Start Speaking
      </Button>
      <Text>Response: {response}</Text>
      <Button colorScheme="green" onClick={getFeedback} isDisabled={!response}>
        Get Feedback
      </Button>
      {feedback && (
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Text>AI Feedback:</Text>
          <Text>{feedback}</Text>
        </Box>
      )}
    </VStack>
  );
};

export default MockInterview;
