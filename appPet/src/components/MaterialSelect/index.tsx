import React from "react";
import { Text, Image, ScrollView } from "react-native";

import { styles } from "./styles";

import { materials } from "../../utils/materialList.ts";
import { CourseButton } from "../CourseButton";

export function MaterialSelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 40 }}
        >
            {materials.map((course) => (
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