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
} from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { COLORS } from "../constants/theme";
import { card_styles } from "./Card/card_styles";

export default Prompt = () => {
  const [input, setInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [popUpMessage, setPopUpMessage] = useState("");

  useEffect(() => {
    axios.post("http://172.23.35.171:8080/api/prompt").then((response) => {
      setPrompt(response.data.generatedText);
    });
  }, []);

  const handleChange = (newText) => {
    setInput(newText);
  };

  const handleSubmit = async () => {
    await axios.post("http://172.23.35.171:8080/api/submit", {
      text: input,
    });
    // .then((response) => {
    //   console.log(response.data);
    // });

    let response = await axios.post("http://172.23.35.171:8080/api/text", {
      text: input,
    });
    setPopUpMessage(response.data.generatedText);
  };

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
