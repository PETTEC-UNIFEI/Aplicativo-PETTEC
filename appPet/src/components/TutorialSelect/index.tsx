import React from "react";
import { Text, Image, ScrollView } from "react-native";

import { styles } from "./styles";

import { tutorials } from "../../utils/tutorialList";
import { CourseButton } from "../CourseButton";

export function TutorialSelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 40 }}
        >
            {tutorials.map((course) => (
                <CourseButton
                    key={course.id}
                    title={course.title}
                    icon={course.icon}
                    level={course.level}
                ></CourseButton>
            ))}
        </ScrollView>
    );
}