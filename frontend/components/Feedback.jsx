import React from "react";
import { View, Box, Heading, Text } from "native-base";
import { COLORS } from "../constants/theme"

export default Feedback = ({ route }) => {
    return (
        <View>
            <Box h="100%" w="80%" m={20} alignSelf="center" color={COLORS.primary}>
                <Heading>
                    🗣️ We say...
                </Heading>
                <Text mt={5}>{route.params.feedbackText}</Text>
            </Box>
        </View>
    )
}