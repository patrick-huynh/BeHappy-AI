import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  Box,
  Center,
  Heading,
  TextArea,
  Button,
  FormControl,
  View,
  Pressable,
  Alert,
  Spinner,
  HStack,
} from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { COLORS } from "../constants/theme";
import { card_styles } from "./Card/card_styles";

import BASE_URL from "../config"

const Loading = () => {
  return (
    <View mt="70%">
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" color={COLORS.primary} />
        <Heading color={COLORS.primary} fontSize="md">
          Loading
        </Heading>
      </HStack>
    </View>
  );
};

export default Prompt = () => {
  const [input, setInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [popUpMessage, setPopUpMessage] = useState("");
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    axios.post(`${BASE_URL}/api/prompt`).then((response) => {
      setPrompt(response.data.generatedText);
      setShowLoading(false);
    });
  }, []);

  const handleChange = (newText) => {
    setInput(newText);
  };

  const handleSubmit = async () => {
    await axios.post(`${BASE_URL}/api/submit`, {
      text: input,
    });

    let response = await axios.post(`${BASE_URL}/api/text`, {
      text: input,
    });
    setPopUpMessage(response.data.generatedText);
  };

  if (showLoading) {
    return <Loading />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Box h="100%" w="80%" alignSelf="center">
          <Heading pt="10" pb="5">
            {/* Type of prompt question goes here */}
            Story Time!
          </Heading>
          {/* The prompt question goes here */}
          <Text>{prompt}</Text>

          <FormControl>
            <TextArea
              h="40%"
              mx="auto"
              my="10"
              placeholder="Answer here."
              value={input}
              onChangeText={handleChange}
              style={card_styles.card}
            ></TextArea>
          </FormControl>
          <Button
            rounded={15}
            onPress={handleSubmit}
            bg={COLORS.primary}
            variant="unstyled"
          >
            <Text fontWeight="bold" color="white" px="5" py="2">
              Submit
            </Text>
          </Button>
          <Pressable
            alignSelf="center"
            mt="5"
            variant="ghost"
            onPress={() => setInput("")}
          >
            <Text color="gray.500">Clear</Text>
          </Pressable>
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};
