import React from "react";
import { useState, useRef } from "react";
import { Text, Image, View, ScrollView, Pressable } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo.png"
import { useNavigation } from "@react-navigation/native";


export function CourseDescription({course, coursePages}) {
    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate(course.id);
    }
    return (
        <View style={styles.container}>
            <View style={styles.superior}>
                <Image source={Logo} style={styles.image}/>
            </View>
            <View style={styles.description}>
                <Text style={styles.title}>{course.title}</Text>
                <View style={styles.info}>
                    <Text style={styles.level}>{course.level}</Text>
                    <Text style={styles.duration}>{course.duration}</Text>
                </View>
                <Text style={styles.text}>{course.description}</Text>
                <Text style={styles.subtitle}>Conteudos</Text>
                <ScrollView contentContainerStyle={styles.content}>
                    {coursePages.map((page) => (
                        <Pressable style={styles.pages} key={page.id} >
                            <Text style={styles.textPages}>{page.title}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <Pressable style={styles.button} onPress={handleNavigate}>
                    <Text style={styles.textButton}>Iniciar</Text>
                </Pressable>
            </View>
        </View>
    );
}