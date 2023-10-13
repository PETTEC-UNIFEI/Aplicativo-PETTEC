import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";

import petIcon from "../../assets/logo.png";

import { CourseSelect } from "../../components/CourseSelect";
import { TutorialSelect } from "../../components/TutorialSelect";
import { MaterialSelect } from "../../components/MaterialSelect";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={petIcon}
                    style={styles.image}
                    resizeMode="stretch"
                />
            </View>
            <Text style={styles.title}>Nossos cursos</Text>
            <ScrollView>
                <Text style={styles.subtitle}>Gerais</Text>
                <CourseSelect />
                <Text style={styles.subtitle}>Tutoriais</Text>
                <TutorialSelect />
                <Text style={styles.subtitle}>Materiais</Text>
                <MaterialSelect />
            </ScrollView>
        </View>
    );
}