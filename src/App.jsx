import React from "react";
import {
  VStack,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Header from "./screens/Header";
import Social from "./screens/Social";
import Portflio from "./screens/Portflio";
import About from "./screens/About";
import Footer from "./screens/Footer";
import Skills from "./screens/Skills";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <VStack p="8">
        <Flex w="90%" align="center">
          <Heading ml="10" size="xl" fontWeight="semibold" color="cyan.500">
            Chaudhary
          </Heading>

          <Spacer />

          <IconButton
            ml="8"
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header />
        <About />
        <Skills />
        <Portflio />
        <Social />
        <Footer />
      </VStack>
    </>
  );
}

export default App;
