import React from "react";
import { HStack, IconButton, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
export default function Social() {
  return (
    <HStack my="15" ml={{ base: "12", md: "20", lg: "10", xl: "10" }}>
      <IconButton
        ml="8"
        icon={<FaGithub />}
        isRound="true"
        as={Link}
        href="https://github.com/dipchaudhary664"
      />
      <IconButton
        ml="8"
        icon={<FaLinkedin />}
        isRound="true"
        as={Link}
        href="https://www.linkedin.com/in/dip-chaudhary-a49139268/"
      ></IconButton>
      <IconButton
        ml="8"
        icon={<FaTwitter />}
        isRound="true"
        as={Link}
        href="https://twitter.com/dipchaudhary664?fbclid=IwAR1hfa0uoo14TirKA8sNb39XWlCkgXz0Ylx3he1TqF5ApkBmp1COuROpv-A"
      ></IconButton>
      <IconButton
        ml="8"
        icon={<FaInstagram />}
        isRound="true"
        as={Link}
        href="https://www.instagram.com/cdhryd10/"
      ></IconButton>
      <IconButton
        ml="8"
        icon={<FaFacebook />}
        isRound="true"
        as={Link}
        href="https://web.facebook.com/deep.xhy"
      ></IconButton>
      <IconButton
        ml="8"
        icon={<FaTiktok />}
        isRound="true"
        as={Link}
        href="https://www.tiktok.com/@deep40631?lang=en"
      ></IconButton>
    </HStack>
  );
}
