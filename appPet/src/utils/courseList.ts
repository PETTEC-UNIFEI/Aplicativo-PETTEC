import PythonLogo from "../assets/python.png";
import LatexLogo from "../assets/latex.png";
import ReactLogo from "../assets/react.png";
import InProgressLogo from "../assets/inProgress.png";

import LatexCourse from "../screens/Courses/LatexCourse";
import PythonCourse from "../screens/Courses/PythonCourse";

export const courses = [
    {
        id: "1",
        title: "Python",
        icon: PythonLogo,
        level: "Iniciante",
        component: PythonCourse,
    },
    {
        id: "2",
        title: "LaTeX",
        icon: LatexLogo,
        level: "Intermediário",
        component: LatexCourse,
    },
    {
        id: "3",
        title: "React Native",
        icon: ReactLogo,
        level: "Avançado",
        component: PythonCourse,
    },
    {
        id: "4",
        title: "Eletrônica Analógica 2",
        icon: InProgressLogo,
        level: "Intermediário",
        component: PythonCourse,
    },
];