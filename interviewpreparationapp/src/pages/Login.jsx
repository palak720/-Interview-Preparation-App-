


import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box, Input, Button, Heading, Text, VStack } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box 
      maxW="400px" 
      mx="auto" 
      mt="50px" 
      p="6" 
      boxShadow="lg" 
      borderRadius="md" 
      bg="gray.800" 
      color="white"
    >
      <Heading size="lg" mb="4" textAlign="center">Login</Heading>
      {error && <Text color="red.300" mb="2">{error}</Text>}
      
      <form onSubmit={handleLogin}>
        <VStack spacing={3}>
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            bg="gray.700" 
            color="white"
            _placeholder={{ color: "gray.400" }}
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            bg="gray.700" 
            color="white"
            _placeholder={{ color: "gray.400" }}
          />
          <Button type="submit" colorScheme="blue" width="full">Login</Button>
        </VStack>
      </form>
      
      <Text mt="4" textAlign="center">
        Don't have an account? 
        <Button variant="link" colorScheme="blue" onClick={() => navigate("/register")}> Register</Button>
      </Text>
    </Box>
  );
};

export default Login;
