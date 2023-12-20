import React from "react";
import { useState, useRef } from "react";
import { Text, Image, View, Button, Pressable } from "react-native";
import PagerView from "react-native-pager-view";

import { styles } from "./styles";

import Next from "../../assets/next.png";
import Back from "../../assets/back.png";

export function ButtonNext({handleNext, handlePrev }) {
    return (           
        <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={handlePrev}>
                <Image source={Back} style={styles.imageButton}/>
                <Text style={styles.buttonText}>Anterior</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Próximo</Text>
                <Image source={Next} style={styles.imageButton}/>
            </Pressable>
        </View>
                
    );
}