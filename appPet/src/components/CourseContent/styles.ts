import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() - 20,
        backgroundColor: theme.colors.background,
    },
    viewPager: {
        flex: 1,
    },
    progressView:{
        width: "100%",
        height: 18,
        alignItems:"center",
        justifyContent:"center",
        marginVertical: 10,
    },
});