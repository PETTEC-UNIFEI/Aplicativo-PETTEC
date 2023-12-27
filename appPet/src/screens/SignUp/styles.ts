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
    content:{
        backgroundColor: theme.colors.background,
        borderRadius: 25,
        padding: 40,
        height: "100%",
        flex: 1,
        paddingTop: 50,
    },
    sub:{
        fontSize:15,
        color:theme.colors.heading,
    },
    input:{
        marginVertical: 8,
        padding:15,
        borderWidth:1.2,
        height:56,
        borderColor:theme.colors.primary,
        borderRadius:10
    },
    butStyle:{
        width:'100%',
        height:56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 30
    },
    textBut:{
        flex: 1,
        color:theme.colors.textLight,
        fontSize:17,
        textAlign:'center'
    },

});