import React from "react";
import { useState, useRef } from "react";
import { Text, Image, View, TextInput, Pressable } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import config from "../../../config/config.json";

export default function SignUp() {

    const [name, setName]=useState(null);
    const [password, setPassword]=useState(null);
    const [email, setEmail]=useState(null);
    const [course, setCourse]=useState(null);
    const [message, setMessage] = useState(null);

    //Send forms data to the backend
    async function registerUser(){
        let reqs = await fetch(config.urlRootNode+'create',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nameUser: name,
                passwordUser: password,
                emailUser: email,
                courseUser: course
            })
        });
}

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
                <Pressable onPress={registerUser} style={styles.butStyle}>
                    <Text style={styles.textBut}>{'Entrar'}</Text>
                </Pressable>
            </View>
        </View>
    );
}