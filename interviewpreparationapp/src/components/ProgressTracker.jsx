import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig"; // Ensure correct path
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

const topics = ["React", "Redux", "JavaScript", "Firebase"];

const ProgressTracker = () => {
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = "testUser"; // Replace with actual user ID
    const userProgressRef = doc(db, "progress", userId);

    // Real-time updates
    const unsubscribe = onSnapshot(userProgressRef, (docSnap) => {
      if (docSnap.exists()) {
        setProgress(docSnap.data());
      } else {
        setProgress({});
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleProgressUpdate = async (topic) => {
    const userId = "testUser"; // Replace with actual user ID
    const userProgressRef = doc(db, "progress", userId);

    const newProgress = { ...progress, [topic]: !progress[topic] };

    try {
      await setDoc(userProgressRef, newProgress);
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  return (
    <VStack spacing={4} p={4} boxShadow="md" borderRadius="lg">
      <Heading>Progress Tracker</Heading>
      {loading ? (
        <Text>Loading progress...</Text>
      ) : (
        topics.map((topic) => (
          <Box key={topic} p={3} borderWidth="1px" borderRadius="md">
            <Text>{topic}: {progress[topic] ? "Completed" : "Not Completed"}</Text>
            <Button size="sm" colorScheme="blue" onClick={() => handleProgressUpdate(topic)}>
              {progress[topic] ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
          </Box>
        ))
      )}
    </VStack>
  );
};

export default ProgressTracker;
