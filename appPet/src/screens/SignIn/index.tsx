import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';

import IllustrationImg from "../../assets/IllustrationIMG.png";

export default function SignIn(){
    const navigation = useNavigation();

    function handleSignIn(){
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>{"\n\n"}Bem-vindo!</Text>
                <Text style={styles.subtitle}>
                    Confira os cursos desenvolvidos {"\n"}
                    pelo PET-TEC da Universidade Federal de Itajubá!{"\n"}
                </Text>
                    <Pressable style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.textButton}>{'Descobrir'}</Text>
                    </Pressable>
            </View>
        </View>
)
}

