import React from "react";
import { useState, useRef } from "react";
import { Text, Image, View, TextInput, Pressable } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import config from "../../../config/config.json";

export default function SignUp() {

    const navigation = useNavigation();
    function handleHome(){
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>

            <View style={styles.superior}>
                <Image source={Logo} style={styles.image}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.sub}>Nome</Text>
                <TextInput style={styles.input} placeholder='Seu nome' onChangeText={(text)=>setName(text)}/>

                <Text style={styles.sub}>Curso</Text>
                <TextInput style={styles.input} placeholder='Seu curso' onChangeText={(text)=>setCourse(text)}/>
                <Text style={styles.sub}>E-mail</Text>
                <TextInput style={styles.input} placeholder='home@email.com.br'onChangeText={(text)=>setEmail(text)}/>
                <Text>Senha</Text>
                <TextInput style={styles.input} placeholder='********' secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
                <Text> Repetir Senha</Text>
                <TextInput style={styles.input} placeholder='********' secureTextEntry={true} />
                <Pressable onPress={handleHome} style={styles.butStyle}>
                    <Text style={styles.textBut}>{'Entrar'}</Text>
                </Pressable>
            </View>
        </View>
    );
}