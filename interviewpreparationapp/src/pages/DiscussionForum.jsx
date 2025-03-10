import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

const DiscussionForum = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "discussions"));
      setMessages(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (message.trim()) {
      await addDoc(collection(db, "discussions"), { text: message });
      setMessage("");
    }
  };

  return (
    <VStack>
      <Box>
        {messages.map((msg, index) => (
          <Text key={index}>{msg.text}</Text>
        ))}
      </Box>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
      <Button onClick={handleSend} colorScheme="blue">Send</Button>
    </VStack>
  );
};

export default DiscussionForum;
