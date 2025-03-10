/*import { Box, Button, Text } from "@chakra-ui/react";

const QuestionCard = ({ question, options, onAnswer }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Text fontSize="lg" mb={2}>{question}</Text>
      {options.map((option, index) => (
        <Button key={index} onClick={() => onAnswer(option)} m={1}>
          {option}
        </Button>
      ))}
    </Box>
  );
};
export default QuestionCard;*/


const QuestionCard = ({ questions = [] }) => {
  return (
    <div>
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <div key={index}>
            <h3>{question.text}</h3>
            {/* Render question details */}
          </div>
        ))
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};
export default QuestionCard