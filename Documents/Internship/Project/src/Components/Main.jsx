import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import {
  Box,
  Button,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { UserData } from "./data";
import Barchart from "./Barchart";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./custom.css";

function Main() {
  const percentage = 78;
  const percentage2 = 95;
  const percentage3 = 59;
  const builds = () => {
    buildStyles({});
  };
  const [userData, setUSerData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Employer",
        data: UserData.map((data) => data.Employer),
        backgroundColor: "#553C9A",
      },
      {
        label: "Employee",
        data: UserData.map((data) => data.Employee),
        backgroundColor: "#9F7AEA",
      },
      {
        label: "Total Interest",
        data: UserData.map((data) => data.Total_Interest),
        backgroundColor: "#90CDF4",
      },
    ],
  });
  return (
    <Stack
      h={{ base: "110vh", lg: "100%" }}
      w={{ base: "100%", lg: "45%" }}
      mt={{ base: "7em", lg: "0" }}
      mb={{ base: "200px", lg: "0" }}
    >
      <HStack
        alignItems={"center"}
        mt={"40px"}
        ml={{ base: "30px", lg: "40px" }}
        mb={"0"}
      >
        <Stack>
          <Text
            color={"purple.400"}
            fontWeight={"bold"}
            fontSize={{ base: "lg", lg: "sm" }}
          >
            Retirement Income
          </Text>
          <Text
            fontSize={{ base: "3xl", lg: "20px" }}
            fontWeight={"bold"}
            mt={{ base: "-10px", lg: "0" }}
          >
            Starting Year 2056
          </Text>
        </Stack>
      </HStack>

      {/* 2nd line */}
      <Stack ml={{ base: "30px", lg: "40px" }} mt={"20px"}>
        {/* inline 1 */}
        <Stack flexDirection={{ base: "column", lg: "row" }}>
          <Stack w={{ base: "90%", lg: "40%" }}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              $300,000
            </Text>
            <Text mb={"10px"} color={"gray.400"}>
              My Goal
            </Text>
            <Box
              orderBottom={"2px solid"}
              borderColor={"purple.400"}
              borderBottomWidth={"3px"}
            ></Box>
          </Stack>
          <Spacer />
          {/* inline 2 */}
          <Stack flexDirection={"row"} w={"100%"}>
            <Spacer display={{ base: "none", lg: "block" }} />
            <Stack w={{ base: "40%", lg: "40%" }}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                59%
              </Text>
              <Text mb={"10px"} color={"gray.400"}>
                Goal Achieved
              </Text>
              <Box
                orderBottom={"2px solid"}
                borderColor={"purple.400"}
                borderBottomWidth={"3px"}
              ></Box>
            </Stack>
            <Spacer />
            <Stack w={{ base: "40%", lg: "40%" }}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                $300
              </Text>
              <Text mb={"10px"} color={"gray.400"}>
                Est. Income
              </Text>
              <Box
                orderBottom={"2px solid"}
                borderColor={"purple.400"}
                borderBottomWidth={"3px"}
              ></Box>
            </Stack>
            <Spacer display={{ lg: "block" }} />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        ml={{ base: "20px", lg: "40px" }}
        mt={{ base: "30px", lg: "20px" }}
      >
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "xl", lg: "lg" }}
          ml={{ base: "20px", lg: "0" }}
        >
          Contributions Overtime
        </Text>
        <HStack
          height={{ base: "16em", lg: "90%" }}
          w={{ base: "95%", lg: "80%" }}
        >
          <Barchart chartData={userData} />
        </HStack>
      </Stack>
      <Stack ml={{ base: "30px", lg: "40px" }} mt={{ base: "-30px", lg: "0" }}>
        <HStack>
          <Text fontWeight={"bold"} fontSize={{ base: "lg" }}>
            How do I compare to my peers?
          </Text>
        </HStack>
        <HStack mt={"-7px"}>
          <Text color={"gray.400"} fontSize={{ base: "xs", lg: "sm" }}>
            This numbers represent current goals achievement
          </Text>
        </HStack>
        <Stack
          flexDirection={{ base: "column", lg: "row" }}
          paddingBottom={{ base: "90px", lg: "0" }}
        >
          <Stack w={{ base: "90%", lg: "25%" }}>
            <HStack borderBottom={"2px solid"} borderColor={"gray.400"}>
              <HStack mb={"8px"}>
                <Text>Age: </Text>
                <Text>
                  Under 30 <Icon as={AiOutlineCaretDown} color={"gray"} />
                </Text>
              </HStack>
            </HStack>

            <HStack borderBottom={"2px solid"} borderColor={"gray.400"}>
              <HStack mb={"8px"}>
                <Text>Salary:</Text>
                <Text>
                  20k-30K <Icon as={AiOutlineCaretDown} color={"gray"} />
                </Text>
              </HStack>
            </HStack>
            <HStack borderBottom={"2px solid"} borderColor={"gray.400"}>
              <HStack mb={"8px"}>
                <Text>Gender</Text>
                <Text>
                  Male <Icon as={AiOutlineCaretDown} color={"gray"} />
                </Text>
              </HStack>
            </HStack>
          </Stack>
          <HStack
            display={"flex"}
            flexDirection={{ base: "row", md: "column", lg: "row" }}
            ml={{ base: "0", lg: "5em" }}
            mt={{ base: "10px", lg: "0" }}
          >
            <Stack h={"100px"} w={"100px"}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={builds}
              />
            </Stack>
            <Stack h={"100px"} w={"100px"}>
              <CircularProgressbar
                value={percentage2}
                text={`${percentage2}%`}
                styles={builds}
              />
            </Stack>
            <Stack h={"100px"} w={"100px"}>
              <CircularProgressbar
                pathColor={"red"}
                value={percentage3}
                text={`${percentage3}%`}
                styles={builds}
                stroke={"red"}
              />
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Main;
