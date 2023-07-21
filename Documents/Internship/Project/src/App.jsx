import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Stratergy from "./Components/Stratergy";
function App() {
  return (
    <>
      <Box
        height="100vh"
        w="100vw"
        display="flex"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Sidebar />
        <Home />
        <Main />
        <Stratergy />
        <Navbar />
      </Box>
    </>
  );
}

export default App;
