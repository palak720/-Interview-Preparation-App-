import { useState } from "react";
import  { generateAIResponse } from "../utils/openai"; 
//console.log("Importing generateAIResponse:", generateAIResponse);
import { Box, Input, Button, Text, VStack } from "@chakra-ui/react";


const AIQuestionGenerator = () => {
  const [jobRole, setJobRole] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = async () => {
    if (!jobRole) {
      alert("Please enter a job role!");
      return;
    }
    

    try {
      const prompt = `Generate 10 interview questions for a ${jobRole} role.`;
      const aiResponse = await generateAIResponse(prompt); // Call the function
      
      if (aiResponse) {
        setQuestions(aiResponse.split("\n").filter(q => q.trim() !== ""));
      } else {
        console.error("No response from AI");
      }
    } catch (error) {
      console.error("Error generating questions:", error);
    }
  };
  
  return (
    <VStack spacing={4} p={4} boxShadow="md" borderRadius="lg">
      <Text fontSize="xl">AI-Powered Question Generator</Text>
      <Input
        placeholder="Enter Job Role (e.g., Frontend Developer)"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
      />
      <Button colorScheme="blue" onClick={generateQuestions}>
        Generate Questions
      </Button>
      {questions.length > 0 && (
        <Box p={4} borderWidth="1px" borderRadius="lg">
          {questions.map((question, index) => (
            <Text key={index}>{question}</Text>
          ))}
        </Box>
      )}
    </VStack>
  );
};

export default AIQuestionGenerator;




