import { Box, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="#003366" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link to="/" style={{ color: "#FFFFFF" }}>Home</Link>
            <Link to="/world" style={{ color: "#FFFFFF" }}>World</Link>
            <Link to="/business" style={{ color: "#FFFFFF" }}>Business</Link>
            <Link to="/tech" style={{ color: "#FFFFFF" }}>Tech</Link>
            <Link to="/markets" style={{ color: "#FFFFFF" }}>Markets</Link>
            <Link to="/opinion" style={{ color: "#FFFFFF" }}>Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box py={8} px={4}>
        <VStack spacing={8} align="stretch">
          {/* Headline Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Top Headlines
            </Heading>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="lg">
                Placeholder Headline 1
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </Box>

          {/* Articles Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Latest Articles
            </Heading>
            <VStack spacing={4}>
              <Box bg="gray.100" p={4} borderRadius="md" w="100%">
                <Heading as="h3" size="lg">
                  Placeholder Article 1
                </Heading>
                <Text mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md" w="100%">
                <Heading as="h3" size="lg">
                  Placeholder Article 2
                </Heading>
                <Text mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Images Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Featured Images
            </Heading>
            <HStack spacing={4}>
              <Image
                src="https://via.placeholder.com/300"
                alt="Placeholder Image 1"
                borderRadius="md"
                boxSize="300px"
                objectFit="cover"
              />
              <Image
                src="https://via.placeholder.com/300"
                alt="Placeholder Image 2"
                borderRadius="md"
                boxSize="300px"
                objectFit="cover"
              />
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;