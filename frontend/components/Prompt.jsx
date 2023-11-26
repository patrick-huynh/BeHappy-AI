import React, { useState } from "react";
import {
  Text,
  Box,
  Center,
  Heading,
  TextArea,
  Button,
  FormControl,
  View,
  //   Keyboard,
} from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export default Prompt = () => {
  Keyboard.dismiss();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Successfully Submitted");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Box h="100%" w="100%">
          <Center>
            <Heading w="70%" pt="10" pb="5">
              {/* Type of prompt question goes here */}
              Story Time!
            </Heading>
            {/* The prompt question goes here */}
            <Text w="70%">Tell us about your day C:</Text>
            <FormControl>
              <TextArea
                w="70%"
                h="50%"
                mx="auto"
                my="10"
                placeholder="Answer here."
                value={input}
                onChange={handleChange}
              ></TextArea>
            </FormControl>
            <Text color="red.500">{input}</Text>
            <Button rounded={15} onSubmit={handleSubmit}>
              <Text color="white" px="5" py="2">
                Submit
              </Text>
            </Button>
            <Button pt="5" variant="ghost" colorScheme="success">
              <Text color="gray.500">Clear</Text>
            </Button>
          </Center>
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};
