import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    conteudo: {
        paddingBottom: 100,
    },
    conteudoText: {
        padding: 24,
        paddingBottom: 400,
        fontSize: 17,
        fontFamily: theme.fonts.text400,
        textAlign: "justify",
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