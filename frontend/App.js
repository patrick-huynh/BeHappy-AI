import React from "react";
import { NativeBaseProvider, Box} from "native-base";
import { SafeAreaView } from "react-native";

import registerNNPushToken from 'native-notify';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar";
import { COLORS } from "./constants/theme";
import Responses from "./pages/Responses";

const Stack = createNativeStackNavigator();

export default function App() {
  registerNNPushToken(15354, 'OMR5vhsELb5y4OPcmOkK9z');
  return (
    <NavigationContainer>
      <NativeBaseProvider>
          <Box width="100%" height="100%" bg={COLORS.tertiary}>
            <TopBar />
            <Box height="72%">
              <Stack.Navigator>
                <Stack.Screen name="Responses" component={Responses} />
              </Stack.Navigator>
            </Box>
            <BottomBar />
          </Box>
      </NativeBaseProvider>
    </NavigationContainer >
  )
}
