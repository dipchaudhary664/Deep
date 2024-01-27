import React from "react";
import {
  Flex,
  useMediaQuery,
  Box,
  Heading,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";

const skillsData = [
  {
    Name: "React Js",
    image: "/images/react.png",
  },
  {
    Name: "Next Js",
    image: "/images/next.png",
  },
  {
    Name: "React - Native",
    image: "/images/native.png",
  },
  {
    Name: "Tailwind CSS",
    image: "/images/tailwind.png",
  },
  {
    Name: "Chakra UI",
    image: "/images/ui.png",
  },
];
export default function Skills() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Box mt="20" alignSelf={"isNotSmallerScreen" ? "center" : "flex-start"}>
      <Heading
        fontSize={{ base: "2xl", md: "xl", lg: "5xl", xl: "5xl" }}
        pl={{ base: "100", md: "10", lg: "0", xl: "0" }}
        color="cyan.500"
        fontWeight="bold"
      >
        What Skills Do I Have?
      </Heading>
      <Flex
        direction="row"
        flexWrap="wrap"
        gap="10"
        mt="5"
        mx={{ base: "100", md: "30", lg: "0", xl: "0" }}
      >
        {skillsData.map((skill, index) => (
          <Flex
            key={index}
            rounded="xl"
            direction="column"
            p="10"
            bg="gray.100"
            h="30vh"
            w="30vh"
            mb="10"
            justify="center"
            align={"center"}
            _hover={{ bg: index % 2 === 0 ? "cyan.400" : "teal.400" }}
          >
            <Image src={skill.image} h="25vh" w="25vh" />
            <Spacer />
            <Text
              fontSize="md"
              align="center"
              color="#1C0666"
              fontWeight="semibold"
            >
              {skill.Name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
