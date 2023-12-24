import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() - 15,
        backgroundColor: theme.colors.background4,
    },
    superior:{
        paddingTop: 80,
        paddingBottom: 60,
        alignItems: "center",
        justifyContent:"center",
    },
    image:{
        width: 55,
        height: 50,
    },
    description:{
        backgroundColor: theme.colors.background,
        borderRadius: 20,
        padding: 30,
        height: "100%",
        flex: 1,
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        paddingBottom: 10,
    },
    info:{
        flexDirection: "row",
        paddingBottom: 10,
    },
    level:{
        fontFamily: theme.fonts.title400,
        color: theme.colors.primary,
        fontSize: 15,
        paddingRight: 10,
    },
    duration: {
        color: theme.colors.clean,
    },
    content:{
        paddingBottom: 10,
    },
    text:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "justify",
        paddingBottom: 10,
    },
    subtitle:{
        fontFamily: theme.fonts.text500,
        fontSize: 17, 
        marginBottom: 10, 
    },
    pages:{
        width:'100%',
        height:56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
        borderWidth: 0.5,
        marginVertical: 5,
        padding: 10,
        borderColor: theme.colors.clean,   
    },
    textPages:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.primary,
    },
    button:{
        width:'100%',
        height:56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 10,
    },
    textButton:{
        flex: 1,
        color:theme.colors.textLight,
        fontSize:17,
        textAlign:"center",
    },
});