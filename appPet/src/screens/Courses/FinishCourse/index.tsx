import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';

import IllustrationImg from "../../../assets/IllustrationIMG.png"

export default function FinishCourse(){
    const navigation = useNavigation();

    function handleSignIn(){
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>{"\n\n"}Parabéns!</Text>
                <Text style={styles.subtitle}>
                    Muito bem, você concluiu esse curso e já pode colocar seus conhecimentos em prática! {"\n"}
                    Conheça outros cursos!{"\n"}
                </Text>
                    <Pressable style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.textButton}>{'Mais cursos'}</Text>
                    </Pressable>
            </View>
        </View>
)
}

