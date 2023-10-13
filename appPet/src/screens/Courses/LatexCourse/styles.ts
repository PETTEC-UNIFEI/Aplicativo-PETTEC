import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsHeader: {
        width: "100%",
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: getStatusBarHeight() + 30,
        paddingBottom: 10,
        borderRadius: 8,
    },
    button: {
        alignSelf: "center",
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#EFEFEF",
    },
    buttonText: {
        fontSize: 17,
        fontFamily: theme.fonts.title400,
    },
    header: {
        width: "100%",
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 15,
    },
    image: {
        width: 35,
        height: 35,
        marginRight: 15,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
    },
    subtitle: {
        fontFamily: theme.fonts.title900,
        fontSize: 18,
        marginLeft: 40,
        marginBottom: 12,
    },
    viewPager: {
        flex: 1,
    },
    dots: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "gba(255,255,255,0.5)",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "#EFEFEF",
        marginHorizontal: 10,
        marginVertical: 35,
    },
    dotActivated: {
        backgroundColor: "black",
    },
});