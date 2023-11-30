import React, { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
  Input,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

const content = [
  {
    icon: "home",
    title: "Home",
  },
  {
    icon: "message",
    title: "Responses",
  },
];

export default BottomBar = () => {
  const [selected, setSelected] = useState(0);

  navigationRef.addListener('state', (event) => {
    setSelected(event.data.state?.index || 0);
  })

  const handleSectionChange = (idx) => {
    navigationRef.navigate(content[idx].title);
  };

  return (
    <Box flex={1} bg={COLORS.primary} width="100%" alignSelf="center">
      <HStack bg={COLORS.primary} alignItems="center" safeAreaBottom py="5">
        {content.map(({ icon, title }, idx) => (
          <Pressable
            key={idx}
            cursor="pointer"
            opacity={selected === idx ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => handleSectionChange(idx)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === idx ? icon : `${icon}-outline`}
                    />
                }
                color="white"
                size="md"
              />
              <Text color="white" fontSize="12">
                {title}
              </Text>
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
};
