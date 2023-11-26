import React, { useState } from "react";
import {
  NativeBaseProvider,
  Text,
  Center,
  Box,
  Divider,
  Flex,
  VStack,
  ScrollView,
  Heading,
  View,
  Image,
  Slider,
  Entypo,
  Icon
} from "native-base";
import { Pressable } from "react-native";
import Prompt from "./Prompt";
import { COLORS } from "../constants/theme"

export default Home = ({ navigation }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = monthNames[month] + " " + date + ", " + year;

  const [streak, setStreak] = useState(21); // 21 is for demo purposes
  const [onChangeValue, setOnChangeValue] = useState(0);

  return (
    <Box width="100%" height="100%" bg="white">
      <Center _text={{ color: "white" }}>
        <Heading pt="10" pb="5">
          {currentDate}
        </Heading>
        <Divider
          w="60%"
          mb="2"
          thickness={4}
          _light={{ bg: COLORS.primary }}
          _dark={{ bg: "muted.50" }}
        />
        <View w="60%" alignItems="flex-end">
          <Text>Streak: {streak} </Text>
        </View>
        <Image
          height="400"
          width="400"
          source={require("../assets/thinking.png")}
          alt="thinking-bubble"
        />
        <Text>{onChangeValue}</Text>
        <Slider
          w="3/4"
          value={onChangeValue}
          onChange={(v) => {
            if (Math.floor(v) == 100) {
              navigation.navigate("Prompt");
              setOnChangeValue(0);
              return;
            }
            setOnChangeValue(Math.floor(v));
          }}
          minValue={0}
          maxValue={100}
          step={1}
          size="lg"
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Center>
    </Box>
  );
};
