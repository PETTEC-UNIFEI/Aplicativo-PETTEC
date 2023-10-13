
import {StyleSheet} from 'react-native';

import  {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create(
    {
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
    
    image:{
        width: 257,
        height:271,
        resizeMode: 'center'

    },
    content:{
        marginTop:-40,
        paddingHorizontal: 50
    },
    
    title: {
        color:theme.colors.heading,
        textAlign: 'center',
        fontSize: 22,
        marginBottom:23,
        fontFamily: theme.fonts.title900
    },
    subtitle:{
        color:theme.colors.text,
        textAlign: 'center',
        fontSize: 16,
        marginBottom:34,
        fontFamily: theme.fonts.text400,
        lineHeight: 24
    },
    button:{
        width:'100%',
        height:56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center'
    },
    textButton: {
        flex: 1,
        color:theme.colors.textLight,
        fontSize:17,
        textAlign:'center'
    },
    }
);