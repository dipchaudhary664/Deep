import React from "react";
import {
  Box,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box mt="15" mb="10" w={{ base: "100%", sm: "100%", md: "0", lg: "50%" }}>
      <Card
        mt="100%"
        w="100%"
        m="auto"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="/images/narayan.jpg"
          alt="About Me"
        />

        <Stack>
          <CardBody>
            <Heading size="md" color="cyan.500">
              About Me
            </Heading>

            <Text py="2">
              I'm taking the plunge into coding, armed with a degree,
              enthusiasm, and a hunger to learn. Let the coding adventure begin!
              🚀
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Hire Me
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}
