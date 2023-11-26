import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

export const card_styles = StyleSheet.create({
    card: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: COLORS.tertiary,
        borderColor: COLORS.primary,
        borderWidth: 2
    },
    header: {
        color: COLORS.primary,
        fontWeight: "bold",
        fontSize: SIZES.large
    },
    subheader: {
        color: "grey",
    },
    body: {
        color: "black",
    },
});