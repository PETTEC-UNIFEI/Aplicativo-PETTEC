import React from "react";
import { styles } from "./styles";

import { coursePages } from "./coursePages";
import { CourseContent } from "../../../components/CourseContent";

export default function PythonCourse() {
    return (
        <CourseContent coursePages={coursePages}/>
    );
}