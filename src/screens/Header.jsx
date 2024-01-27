import React from "react";
import {
  Stack,
  Flex,
  Circle,
  useColorMode,
  useMediaQuery,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
export default function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack w="90%" my={{ base: "0", sm: "0", md: "0", lg: "20", xl: "20" }}>
      {/* <Circle
        position="absolute"
        bg="blue.500"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
        mr="10%"
        mt="5%"
      ></Circle> */}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        px={isNotSmallerScreen ? "35" : "0"}
        alignSelf={"flex-start"}
      >
        <Box mt={isNotSmallerScreen ? "0" : "5"} align="flex-start">
          <Text fontSize={"5xl"} fontWeight="semibold" color="cyan.500">
            Hi I'm
          </Text>
          <Text
            fontSize={"6xl"}
            fontWeight="bold"
            bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"}
            bgClip="text"
          >
            Dip Chaudhary
          </Text>
          <Text
            color={isDark ? "gray.300" : "gray.700"}
            w={{ base: "90%", md: "70%" }}
          >
            Hello everyone! 👋 I'm excited to share that I'm a recent graduate
            who is stepping into the captivating world of coding. Fresh from
            academia, I'm now ready to channel my enthusiasm and knowledge into
            real-world coding adventures.
          </Text>
          <Button mt="8" colorScheme="blue">
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxSize="300px"
          shadow="5px 5px 10px rgba(0,0,0,0.5)"
          src="/images/7274.jpg"
          alt="Dip Chaudhary"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  );
}
