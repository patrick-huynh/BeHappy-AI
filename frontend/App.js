import React, { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  useColorMode,
  useColorModeValue,
  Center,
  Button,
  StatusBar,
  HStack,
  IconButton,
  Icon,
  Text,
} from "native-base";
import registerNNPushToken from 'native-notify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from "./components/BottomBar";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import { COLORS } from "./constants/theme";
import Responses from "./pages/Responses";


const Stack = createNativeStackNavigator();


export default function App() {
  registerNNPushToken(15354, 'OMR5vhsELb5y4OPcmOkK9z');

  return (
    <NavigationContainer ref={navigationRef}>

      <NativeBaseProvider>
        <Box width="100%" height="100%" bg={COLORS.tertiary}>
          <TopBar />
          <Box height="72%">
            <Stack.Navigator 
              initialRouteName="Home" 
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={Home}></Stack.Screen>
              <Stack.Screen name="Prompt" component={Prompt} />
              <Stack.Screen name="Responses" component={Responses} options={{gestureEnabled: false, animation: "none"}}/>
            </Stack.Navigator>
          </Box>
          <BottomBar />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer >
  );
}
