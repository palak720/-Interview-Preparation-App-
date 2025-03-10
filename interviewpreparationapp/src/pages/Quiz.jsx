import { useState, useEffect } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://interview-preparation-ap-98f16-default-rtdb.firebaseio.com/quizQuestions.json"
        );

        console.log("API Response:", response.data); // Debugging API response

        if (!response.data || typeof response.data !== "object") {
          throw new Error("Invalid API response structure");
        }

        // Convert Firebase object into an array with valid options
        const formattedQuestions = Object.keys(response.data).map((key) => {
          const q = response.data[key];

          if (!q || !q.question || !q.answer || !Array.isArray(q.options)) {
            console.warn("Skipping invalid question:", q);
            return null;
          }

          return {
            question: q.question,
            correctAnswer: q.answer, // Adjusted based on your JSON
            options: q.options.sort(() => Math.random() - 0.5), // Shuffle options
          };
        }).filter(Boolean); // Remove null values (invalid questions)

        if (formattedQuestions.length === 0) {
          throw new Error("No valid questions found.");
        }

        console.log("Formatted Questions:", formattedQuestions); // Debugging final state

        setQuestions(formattedQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Failed to load questions. Please try again.");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentIndex]?.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Text mt={4}>Loading Questions...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={10} color="red">
        <Text mt={4}>{error}</Text>
      </Box>
    );
  }

  return (
    <VStack spacing={6} p={6} align="center">
      <Heading size="lg">Quiz</Heading>

      {questions.length > 0 && questions[currentIndex]?.question ? (
        <>
          <Text fontSize="xl">{questions[currentIndex].question}</Text>
          <VStack spacing={4} w="full">
            {questions[currentIndex].options.length > 0 ? (
              questions[currentIndex].options.map((option, index) => (
                <Button key={index} w="full" colorScheme="blue" onClick={() => handleAnswer(option)}>
                  {option}
                </Button>
              ))
            ) : (
              <Text fontSize="xl" color="red">
                No options available. Check API Data.
              </Text>
            )}
          </VStack>
        </>
      ) : (
        <Text fontSize="xl">No questions available.</Text>
      )}

      <Text fontSize="md">
        Question {currentIndex + 1} of {questions.length}
      </Text>
    </VStack>
  );
};

export default Quiz;
