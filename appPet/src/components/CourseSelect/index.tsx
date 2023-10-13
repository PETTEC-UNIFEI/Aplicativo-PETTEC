import React from "react";
import { Text, Image, ScrollView } from "react-native";

import { styles } from "./styles";

import { courses } from "../../utils/courseList";
import { CourseButton } from "../CourseButton";

export function CourseSelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 40 }}
        >
            {courses.map((course) => (
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