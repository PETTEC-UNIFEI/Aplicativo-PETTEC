import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    //css code
    container:{
        backgroundColor: theme.colors.background,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 257,
        height:271,
        resizeMode: 'center',
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
        borderColor: theme.colors.primary,
        borderRadius:10
    },
    conteudo2:{
        paddingHorizontal: 40,
        marginTop:25,
        width:"100%",
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
    signup:{
        fontFamily: theme.fonts.title400,
        color: theme.colors.primary,
        fontSize: 15,
        paddingRight: 5,
        textAlign:"right",
        marginTop: -5,
    }
  
  });