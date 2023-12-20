import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    buttons: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 30,
        backgroundColor: "white",
    },
    button: {
        width: "50%",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        height: 50,
        borderWidth: 0.5,

    },
    buttonText: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        fontSize: 17,
        fontFamily: theme.fonts.title400,
        color: theme.colors.primary,
    },
    imageButton: {
        width: 32,
        height: 32,
    },
});