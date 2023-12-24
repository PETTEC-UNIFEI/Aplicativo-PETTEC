import React from "react";

import { CourseDescription } from "../../../../components/CourseDescription";
import { courses } from "../../../../utils/courseList";
import { coursePages } from "../coursePages";

export default function PythonDescription() {
    return (
        < CourseDescription course={courses[0]} coursePages={coursePages}/>
    );
}