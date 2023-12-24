import React from "react";

import { CourseDescription } from "../../../../components/CourseDescription";
import { courses } from "../../../../utils/courseList";
import { coursePages } from "../coursePages";

export default function LatexDescription() {
    return (
        < CourseDescription course={courses[1]} coursePages={coursePages}/>
    );
}