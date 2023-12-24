import PythonLogo from "../assets/python.png";
import LatexLogo from "../assets/latex.png";
import ReactLogo from "../assets/react.png";
import InProgressLogo from "../assets/inProgress.png";

import PythonDescription from "../screens/Courses/PythonCourse/Description";
import PythonContent from "../screens/Courses/PythonCourse/Content";
import LatexDescription from "../screens/Courses/LatexCourse/Description";
import LatexContent from "../screens/Courses/LatexCourse/Content";
export const courses = [
    {
        id: "1",
        title: "Python",
        icon: PythonLogo,
        level: "Iniciante",
        description: "Lorem ipsum dolor sit amet. At totam quis 33 porro omnis qui eaque expedita hic delectus nemo ea eaque doloribus? Non consectetur sapiente in molestiae internos ex cupiditate minima et temporibus omnis eum blanditiis veritatis.",
        duration: "12 hrs",
        component: PythonDescription,
        component1: PythonContent,
    },
    {
        id: "2",
        title: "LaTeX",
        icon: LatexLogo,
        level: "Intermediário",
        description: "Lorem ipsum dolor sit amet. At totam quis 33 porro omnis qui eaque expedita hic delectus nemo ea eaque doloribus? Non consectetur sapiente in molestiae internos ex cupiditate minima et temporibus omnis eum blanditiis veritatis.",
        duration: "12 hrs",
        component: LatexDescription,
        component1: LatexContent,
    },
    {
        id: "3",
        title: "React Native",
        icon: ReactLogo,
        level: "Avançado",
        description: "Lorem ipsum dolor sit amet. At totam quis 33 porro omnis qui eaque expedita hic delectus nemo ea eaque doloribus? Non consectetur sapiente in molestiae internos ex cupiditate minima et temporibus omnis eum blanditiis veritatis.",
        duration: "12 hrs",
        component: PythonDescription,
        component1: PythonContent,

    },
    {
        id: "4",
        title: "Eletrônica Analógica 2",
        icon: InProgressLogo,
        level: "Intermediário",
        description: "Lorem ipsum dolor sit amet. At totam quis 33 porro omnis qui eaque expedita hic delectus nemo ea eaque doloribus? Non consectetur sapiente in molestiae internos ex cupiditate minima et temporibus omnis eum blanditiis veritatis.",
        duration: "12 hrs",
        component: PythonDescription,
        component1: PythonContent,

    },
];