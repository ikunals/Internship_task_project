import { Icon, List, ListItem } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { PiNotebookLight } from "react-icons/pi";
import { FaRegListAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import React from "react";

function Navbar() {
  return (
    <List
      cursor={"pointer"}
      overflow={"hidden"}
      top={"90%"}
      position={"fixed"}
      display={{ base: "flex", md: "none", lg: "none" }}
      flexDir={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={"#fafafa"}
      h={"10%"}
      w={"100%"}
      gap={"10px"}
      p={"25px"}
    >
      <ListItem borderRadius={"10px"} bgColor={"purple.600"}>
        <Icon m={"8px"} as={BiHomeAlt} boxSize={7} color={"white"} />
      </ListItem>
      <ListItem>
        <Icon as={PiNotebookLight} boxSize={7} color={"gray.600"} />
      </ListItem>
      <ListItem>
        <Icon as={FaRegListAlt} boxSize={7} color={"gray.600"} />
      </ListItem>
      <ListItem>
        <Icon as={CgProfile} boxSize={7} color={"gray.600"} />
      </ListItem>
      <ListItem>
        <Icon as={FaSearch} boxSize={6} color={"gray.500"} />
      </ListItem>
    </List>
  );
}

export default Navbar;
