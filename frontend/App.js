import React from "react";
import { NativeBaseProvider, 
  Box,
  useColorMode,
  useColorModeValue,
  Center,
  Button,
  StatusBar,
  HStack,
  IconButton,
  Icon,
  Text
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar";
import { COLORS } from "./constants/theme";

function UseColorMode() {
  const {
    toggleColorMode
  } = useColorMode();
  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  return <Center>
    <Box p="4" flex="1" bg={bg} maxW="300" w="100%" mt={10} safeArea>
      <Text fontSize="lg" display="flex" mb={20}>
        The active color mode is{" "}
        <Text bold fontSize="18px">
          {text}
        </Text>
      </Text>
      <Button onPress={toggleColorMode} h={10}>
        Toggle
      </Button>
    </Box>
  </Center>;
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Box width="100%" height="100%" bg={COLORS.tertiary}>
        <TopBar />
        <Box height="72%">

        </Box>
        <BottomBar />
      </Box>
    </NativeBaseProvider>
  )
}
