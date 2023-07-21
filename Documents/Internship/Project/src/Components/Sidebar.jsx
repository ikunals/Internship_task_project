import { Icon, List, ListItem, Spacer, Stack } from "@chakra-ui/react";
import { PiButterflyFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { VscBellDot } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { PiNotebookLight } from "react-icons/pi";
import { FaRegListAlt } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import React from "react";

function Sidebar() {
  return (
    <List
      cursor={"pointer"}
      display={{ base: "none", md: "flex", lg: "flex" }}
      flexDir={"column"}
      alignItems={"center"}
      bg={"#FFFFF0"}
      h={"100%"}
      w={"5%"}
      gap={"20px"}
      p={"10px"}
    >
      <ListItem mt={"10px"}>
        <Icon as={PiButterflyFill} boxSize={6} color={"purple.400"} />
      </ListItem>
      <ListItem>
        <Icon as={FaSearch} boxSize={5} color={"gray.400"} />
      </ListItem>

      <ListItem mt={"40px"} borderRadius={"10px"} bgColor={"purple.600"}>
        <Icon margin={"7px"} as={BiHomeAlt} boxSize={6} color={"white"} />
      </ListItem>
      <ListItem>
        <Icon as={PiNotebookLight} boxSize={6} color={"gray.500"} />
      </ListItem>
      <ListItem>
        <Icon as={FaRegListAlt} boxSize={5} color={"gray.400"} />
      </ListItem>
      <ListItem>
        <Icon as={CgProfile} boxSize={6} color={"gray.400"} />
      </ListItem>

      <Spacer />
      <ListItem>
        <Icon as={VscBellDot} boxSize={6} color={"gray.400"} />
      </ListItem>
      <ListItem ml={"5px"}>
        <Icon as={TbLogout} boxSize={7} color={"gray.400"} />
      </ListItem>
    </List>
  );
}

export default Sidebar;
