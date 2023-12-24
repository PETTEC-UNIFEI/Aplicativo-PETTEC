import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom: 10,
    },
    conteudoText: {
        padding: 24,
        paddingBottom: 400,
        fontSize: 15,
        fontFamily: theme.fonts.text400,
        textAlign: "justify",
        color: theme.colors.heading,

    },
    title: {
        paddingHorizontal: 24,
        fontFamily: theme.fonts.title700,
        fontSize: 20,
    },
    frame: {},
    activity: {
        top: 100,
    },
});