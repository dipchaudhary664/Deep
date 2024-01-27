import React from "react";
import {
  Flex,
  useMediaQuery,
  Box,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

export default function Portflio() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxW={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      my="20"
    >
      <Box alignSelf={"isNotSmallerScreen" ? "center" : "flex-start"}>
        <Heading fontSize="4xl" fontWeight="extrabold" color="cyan.500">
          5+
        </Heading>
        <Text fontSize="2xl" color="cyan.500">
          Months of Experience
        </Text>
      </Box>

      <Box ml="20" alignSelf={"isNotSmallerScreen" ? "center" : "flex-start"}>
        <Text fontSize="2xl" color="cyan.500" fontWeight="bold">
          Fronted Engineer
        </Text>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          gap="10"
          mt="5"
          mr={{ base: "100", md: "30", lg: "0", xl: "0" }}
        >
          <Flex
            rounded="xl"
            direction="column"
            pl="55"
            pb="10"
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "cyan.400" }}
          >
            <Icon as={DiCodeigniter} w="10vh" h="10vh" />
            <Text fontSize="xl" color="white" fontWeight="semibold">
              Frontend Engineer
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            pl="55"
            pb="10"
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon as={DiAndroid} w="10vh" h="10vh" />
            <Text fontSize="xl" color="white" fontWeight="semibold" pr={"10"}>
              Frontend App
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            pl="55"
            pb="10"
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={DiWebplatform} w="10vh" h="10vh" />
            <Text fontSize="xl" color="white" fontWeight="semibold" pr={"10"}>
              Frontend Web
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
