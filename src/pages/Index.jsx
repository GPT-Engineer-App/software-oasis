import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header Section */}
      <Box as="header" py={6} textAlign="center">
        <Heading as="h1" size="2xl" mb={2}>
          Welcome to SaaSify
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Your ultimate solution for managing your business efficiently
        </Text>
      </Box>

      {/* Hero Section */}
      <Box as="section" py={10} textAlign="center">
        <VStack spacing={6}>
          <Heading as="h2" size="xl">
            Boost Your Productivity
          </Heading>
          <Text fontSize="md" color="gray.600">
            Our platform helps you streamline your workflow and increase your productivity.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
          <Image src="https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHl8ZW58MHx8fHwxNzE1NjcwNjc4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Productivity" borderRadius="md" boxShadow="md" />
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" py={10} bg="gray.50">
        <VStack spacing={8}>
          <Heading as="h2" size="xl">
            Features
          </Heading>
          <HStack spacing={10} wrap="wrap" justify="center">
            <VStack spacing={4} maxW="sm" textAlign="center">
              <FaCheckCircle size="3em" color="teal" />
              <Heading as="h3" size="md">
                Feature One
              </Heading>
              <Text color="gray.600">Description of feature one and how it benefits the user.</Text>
            </VStack>
            <VStack spacing={4} maxW="sm" textAlign="center">
              <FaCheckCircle size="3em" color="teal" />
              <Heading as="h3" size="md">
                Feature Two
              </Heading>
              <Text color="gray.600">Description of feature two and how it benefits the user.</Text>
            </VStack>
            <VStack spacing={4} maxW="sm" textAlign="center">
              <FaCheckCircle size="3em" color="teal" />
              <Heading as="h3" size="md">
                Feature Three
              </Heading>
              <Text color="gray.600">Description of feature three and how it benefits the user.</Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" py={10} textAlign="center">
        <VStack spacing={6}>
          <Heading as="h2" size="xl">
            Get in Touch
          </Heading>
          <Text fontSize="md" color="gray.600">
            Have questions? Reach out to us and we'll get back to you as soon as possible.
          </Text>
          <HStack spacing={4}>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="teal" />
            <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" colorScheme="teal" />
          </HStack>
        </VStack>
      </Box>

      {/* Footer Section */}
      <Box as="footer" py={6} textAlign="center" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} SaaSify. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
