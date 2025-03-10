import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Link, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.600" py={4} px={6} color="white">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {/* Left Side - Brand */}
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          Interview Prep
        </Link>

        {/* Right Side - Navigation Links */}
        <HStack spacing={6}>
          <Link as={RouterLink} to="/login" _hover={{ textDecoration: "underline" }}>
            Login
          </Link>
          <Link as={RouterLink} to="/register" _hover={{ textDecoration: "underline" }}>
            Register
          </Link>
          
         
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
