import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";

function Home() {
  return (
    <Stack
      // paddingLeft={"5%"}
      bg={{ lg: "gray.100", base: "none" }}
      height={"100%"}
      w={{ base: "100%", lg: "25%" }}
      color={"black"}
    >
      <HStack display={{ base: "flex", lg: "none" }} mt={"1em"} mr={"2em"}>
        <Spacer />
        <Icon as={VscBellDot} boxSize={8} color={"gray.400"} />
      </HStack>
      <HStack
        display={"flex"}
        // alignItems={"center"}
        mt={{ base: "1.5em", lg: "25px" }}
        ml={"50px"}

        // justifyContent={"center"}
      >
        <Avatar
          size={{ base: "lg", lg: "lg" }}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Box>
          <Text
            ml={"10px"}
            fontSize={{ lg: "1.5em", base: "2em" }}
            fontWeight={"bold"}
          >
            Hi Mike,
          </Text>
          <Text ml={"10px"} fontSize={"15px"} mt={{ base: "-10px", lg: "0" }}>
            welcome back.
          </Text>
        </Box>
      </HStack>

      <Stack
        ml={{ base: "40px", lg: "50px" }}
        mr={{ base: "40px", lg: "0" }}
        mt={"15px"}
        backgroundColor={{ base: "gray.100", lg: "none" }}
        alignItems={"start"}
        justifyContent={"start"}
        borderRadius={"1em"}
      >
        <Stack p={{ base: "20px", lg: "0" }}>
          <Text fontWeight={"Bold"} fontSize={"lg"}>
            Today
          </Text>
          <Box mt={"5px"}>
            <Text fontWeight={"bold"} fontSize={{ lg: "3xl", base: "4xl" }}>
              $19,892
            </Text>
            <Text
              color={"gray.400"}
              fontWeight={"bold"}
              fontSize={{ lg: "xs", base: "small" }}
              mt={{ lg: "0", base: "-6px" }}
            >
              Account Balance
            </Text>
          </Box>

          <Stack flexDirection={{ base: "row", lg: "column" }}>
            <Box mt={"5px"}>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                $4000
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row"}
                color={"gray.400"}
                fontWeight={"bold"}
                fontSize={"xs"}
              >
                Year-to-Date &nbsp;
                <Text display={{ base: "none", lg: "block" }}>
                  Contribution
                </Text>
              </Text>
            </Box>
            <Spacer />
            <Box mt={"5px"} ml={{ base: "50px", lg: "0" }}>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                $1892
              </Text>
              <Text color={"gray.400"} fontWeight={"bold"} fontSize={"xs"}>
                Total Interest
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Button
          colorScheme="purple"
          w={{ base: "85%", lg: "40%" }}
          ml={{ base: "20px", lg: "0" }}
          mb={{ base: "20px", lg: "0" }}
          mt={{ base: "0", lg: "10px" }}
          mr={{ base: "10px", lg: "none" }}
          rightIcon={<AiOutlineCaretDown />}
        >
          I want to
        </Button>
      </Stack>

      {/* RECENT TRANSACTION */}
      <Stack
        ml={"40px"}
        mt={"40px"}
        bgColor={{ base: "gray.100", lg: "none" }}
        mr={{ base: "40px", lg: "0" }}
        borderRadius={{ base: "10%", lg: "0" }}
      >
        <Stack p={{ base: "20px", lg: "0" }}>
          <Text fontWeight={"Bold"} fontSize={"xl"}>
            Recent Transactions
          </Text>
          <Box mt={"10px"} paddingBottom={"10px"}>
            <Text color={"gray.400"} fontWeight={"bold"} fontSize={"13px"}>
              2020-08-07
            </Text>
            <Text fontWeight={"bold"} fontSize={"sm"}>
              Withdrawal Transfer to Bank-XXX11
            </Text>
          </Box>
          <Box
            borderBottom={"2px solid "}
            borderBottomColor={"gray.300"}
            mr={{ base: "", lg: "70px" }}
          ></Box>
          <Box mt={"10px"} paddingBottom={"10px"}>
            <Text color={"gray.400"} fontWeight={"bold"} fontSize={"13px"}>
              2020-07-21
            </Text>
            <Text fontWeight={"bold"} fontSize={"sm"}>
              Withdrawal Transfer to Bank-XXX11
            </Text>
          </Box>
          <Box
            borderBottom={"2px solid "}
            borderBottomColor={"gray.300"}
            mr={{ base: "", lg: "70px" }}
          ></Box>
          <Box mt={"10px"} pb={"10px"}>
            <Text color={"gray.400"} fontWeight={"bold"} fontSize={"13px"}>
              2020-07-16
            </Text>
            <Text fontWeight={"bold"} fontSize={"sm"}>
              Withdrawal Transfer to Bank-XXX11
            </Text>
          </Box>
          <Box
            borderBottom={"2px solid "}
            borderBottomColor={"gray.300"}
            mr={{ base: "", lg: "70px" }}
          ></Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
