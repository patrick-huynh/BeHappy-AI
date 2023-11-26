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
  Icon,
  IconButton,
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Prompt from "./Prompt";
import { COLORS } from "../constants/theme";

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
  const [message, setMessage] = useState(
    "Open your daily prompt today to BeHappy!"
  );

  return (
    <Box width="100%" height="100%" bg="white">
      <Center _text={{ color: "white" }}>
        <Heading color={COLORS.secondary} pt="10" pb="5">
          {currentDate}
        </Heading>
        <Divider
          w="70%"
          mb="2"
          thickness={3}
          _light={{ bg: COLORS.primary }}
          _dark={{ bg: "muted.50" }}
        />
        <View w="70%" alignItems="flex-end">
          <Text fontWeight="medium">Streak: {streak} </Text>
        </View>
        <Box w="100%" h="70%">
          <Center>
            <Image
              ml="5"
              height="100%"
              width="100%"
              source={require("../assets/thinking.png")}
              alt="thinking-bubble"
            />
          </Center>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Heading
              color={COLORS.primary}
              w="70%"
              size="md"
              textAlign="center"
              mb="2"
            >
              Welcome {"<3"}
            </Heading>
            <Heading w="70%" size="sm" fontWeight="medium" textAlign="center">
              {message}
            </Heading>
          </View>
        </Box>
        <Text>Swipe →</Text>
        <Slider
          w="3/4"
          value={onChangeValue}
          onChange={(v) => {
            if (Math.floor(v) == 100) {
              navigation.navigate("Prompt");
              setOnChangeValue(0);
              setStreak(streak + 0.5);
              setMessage(
                <Text>I hope you have a great day!{"\n"}- HappyBrain</Text>
              );
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
            <Slider.FilledTrack bg={COLORS.secondary} />
          </Slider.Track>
          <Slider.Thumb>
            <Icon
              as={Ionicons}
              name="heart"
              color="red"
              size="6"
              // mr="1"
            />
          </Slider.Thumb>
        </Slider>
      </Center>
    </Box>
  );
};
