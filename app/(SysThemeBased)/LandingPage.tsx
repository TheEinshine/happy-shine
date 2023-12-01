"use client";
import { Box, Container, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

const LandingPage = () => {
  const [color, setColor] = useState({
    firstColorTone: 500,
    secondColorTone: 900,
    thirdColorTone: 500,
  });
  const [colorNames, setColorNames] = useState({
    firstColor: "purple",
    secondColor: "teal",
    thirdColor: "blue",
  });
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const roundedValue = Math.round(value / 100) * 100;
    setColor((prev) => ({
      ...prev,
      [e.target.name]: roundedValue,
    }));
  };
  const handleColorNames = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColorNames((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const colorOptions = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Purple", value: "purple" },
    { label: "Orange", value: "orange" },
    { label: "Pink", value: "pink" },
    { label: "Teal", value: "teal" },
    { label: "Indigo", value: "indigo" },
    { label: "Cyan", value: "cyan" },
    { label: "Lime", value: "lime" },
  ];

  return (
    <Box
      userSelect={"none"}
      bgGradient={`linear(to-r, ${colorNames.firstColor}.${color.firstColorTone}, ${colorNames.secondColor}.${color.secondColorTone}, ${colorNames.thirdColor}.${color.thirdColorTone})`}
      minH="100vh"
      py={12}
    >
      <Container>
        <Text fontSize={"8xl"}>welcome ?</Text>
        <Text fontSize={"xl"}>{`ᓚᘏᗢ`}</Text>
      </Container>
      <Flex flexDir={"column"} mt={2}>
        <Flex pb={10} justifyContent={"center"}></Flex>
      </Flex>
      <Container>
        <Box>
          <Flex
            py={2}
            gap={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text>{`A)`}</Text>
            <Text> {`✦ ${colorNames.firstColor + "." + color.firstColorTone} ✦ `}</Text>
            <Select
              w={"200px"}
              onChange={(e) => handleColorNames(e)}
              name="firstColor"
              value={colorNames.firstColor}
            >
              {colorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Flex>
          <Input
            type="range"
            min={100}
            max={900}
            name="firstColorTone"
            onChange={(e) => handleColorChange(e)}
            value={color.firstColorTone}
          ></Input>
        </Box>
        <Box>
          <Flex
            py={2}
            gap={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text>{`B)`}</Text>
            <Text> {`✦ ${colorNames.secondColor + "." + color.secondColorTone} ✦ `}</Text>
            <Select
              w={"200px"}
              name="secondColor"
              value={colorNames.secondColor}
              onChange={(e) => handleColorNames(e)}
            >
              {colorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Flex>
          <Input
            type="range"
            min={100}
            max={900}
            name="secondColorTone"
            onChange={(e) => handleColorChange(e)}
            value={color.secondColorTone}
          ></Input>
        </Box>
        <Box>
          <Flex
            py={2}
            gap={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text>{`C)`}</Text>
            <Text>
              {`✦ ${colorNames.thirdColor + "." + color.thirdColorTone} ✦ `}
            </Text>
            <Select
              w={"200px"}
              onChange={(e) => handleColorNames(e)}
              name="thirdColor"
              value={colorNames.thirdColor}
            >
              {colorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Flex>
          <Input
            type="range"
            min={100}
            max={900}
            name="thirdColorTone"
            onChange={(e) => handleColorChange(e)}
            value={color.thirdColorTone}
          ></Input>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
