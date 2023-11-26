import React from "react";

import { COLORS } from "../../constants/theme";
import { Box, VStack, Text, View } from "native-base";
import { styles } from "../../styles/global";
import { card_styles } from "./card_styles";

export default Card = ({ header, subheader, body, footer }) => {
  return (
    <Box
      alignSelf="center"
      my={3}
      h="20%"
      w="90%"
      border="1"
      borderRadius="3xl"
      style={card_styles.card}
      px={2}
      py={4}
    >
      <VStack space="2">
        <View px={4}>
          <Box pt="4">
            <Text style={card_styles.header}>{header}</Text>
          </Box>
          <Box>
            <Text style={card_styles.subheader}>{subheader}</Text>
          </Box>
          <Box pt="4">
            <Text style={card_styles.body}>{body}</Text>
          </Box>
          <Box pb="4">
            <Text style={styles.bodyText}>{footer}</Text>
          </Box>
        </View>
      </VStack>
    </Box>
  );
};
