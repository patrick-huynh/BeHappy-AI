import React from "react";

import { COLORS } from "../constants/theme" 

import {
    Box,
    StatusBar,
    HStack,
    IconButton,
    Icon,
    Text
  } from "native-base";
  import { MaterialIcons } from "@expo/vector-icons";

export default TopBar = () => {
    return <>
        <StatusBar barStyle="light-content" />
        <Box safeAreaTop bg="#785f7e" />
        <HStack bg={COLORS.primary} px="3" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
                <Text color="white" fontSize="20" fontWeight="bold">
                    👋 Hey Fred!
                </Text>
            </HStack>
            <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="person" size="xl" color="white" />} />
            </HStack>
        </HStack>
        </>;
    }