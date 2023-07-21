import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { MdArrowForwardIos } from "react-icons/md";

// MdArrowForwardIos;

function Stratergy() {
  return (
    <Stack
      pb={{ base: "80px", lg: "0" }}
      w={{ base: "100%", lg: "30%" }}
      mt={{ base: "0", lg: "2em" }}
      pl={{ base: "0", lg: "2em" }}
      pr={{ base: "0", lg: "5em" }}
    >
      <Stack
        // mb={{ base: "35px", lg: "0" }}
        bg={"gray.100"}
        h={{ base: "100%", lg: "62%" }}
        w={"100%"}
        borderRadius={"10px"}
      >
        <Stack
          mt={{ base: "20px", lg: "20px" }}
          ml={{ base: "25px", lg: "25px" }}
          mb={{ base: "0", lg: "20px" }}
          flexDirection={{ base: "row", lg: "column" }}
        >
          <Text fontWeight={"bold"} fontSize={"xl"}>
            Retirement Stratergy
          </Text>
        </Stack>
        {/* 2nd line */}
        <Stack ml={"25px"}>
          <HStack>
            <Text fontWeight={"bold"}>Employee Contribution</Text>
          </HStack>
          <HStack>
            <Slider aria-label="slider-ex-1" defaultValue={50} w={"70%"}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>12%</Text>
          </HStack>
        </Stack>
        <Stack ml={"25px"}>
          <HStack>
            <Text fontWeight={"700"}>Retirement Age</Text>
          </HStack>
          <HStack>
            <Slider aria-label="slider-ex-1" defaultValue={70} w={"70%"}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>65</Text>
          </HStack>
        </Stack>
        <Box
          borderBottom={"2px solid"}
          m={"20px"}
          borderColor={"gray.400"}
        ></Box>
        <Stack ml={"25px"} mr={"25px"}>
          <HStack fontWeight={"bold"}>
            <Text>Employer Contribution</Text>
            <Spacer />
            <Text>8.4%</Text>
          </HStack>
          <HStack fontWeight={"bold"}>
            <Text>Interest Rate</Text>
            <Spacer />
            <Text>5%</Text>
          </HStack>
        </Stack>
        <Button
          overflow={"hidden"}
          ml={{ base: "0", lg: "20px" }}
          mt="10px"
          mr={{ base: "0", lg: "20px" }}
          colorScheme="purple"
          w={{ base: "100%", lg: "80%" }}
          // h={"100%"}
          h={"40px"}
          borderRadius={{ base: "0", lg: "12px" }}
        >
          Update
        </Button>
        <VStack mt={"5px"}>
          <Text
            display={"flex"}
            alignItems={"center"}
            color={"purple.500"}
            fontWeight={"bold"}
          >
            View Help Docs &nbsp;
            <Icon as={MdArrowForwardIos} />
          </Text>
        </VStack>
      </Stack>

      <Stack
        display={{ base: "none", lg: "block" }}
        h={"20%"}
        w={"100%"}
        mt={"10px"}
        borderLeft={"3px solid "}
        borderColor={"purple.400"}
      >
        <Stack ml={"20px"}>
          <Text>
            Are you considering a <br />
            <span style={{ fontWeight: "bold" }}>Housing Advance?</span>
          </Text>

          <Text color={"gray"}>Limited time reduced interest</Text>
          <Text
            display={"flex"}
            alignItems={"center"}
            // justifyContent={"start"}
            color={"purple.500"}
            fontWeight={"bold"}
          >
            Learn more &nbsp;
            <Icon as={MdArrowForwardIos} />
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Stratergy;
