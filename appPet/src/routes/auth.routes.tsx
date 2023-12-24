import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import SignIn from "../screens/SignIn";

import { courses } from "../utils/courseList";
import { tutorials } from "../utils/tutorialList";
import { materials } from "../utils/materialList";

const Stack = createNativeStackNavigator();

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },
};
export function AuthRoutes() {
    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Home" component={Home} />

                {/* Generate a map for the list courseList.ts to generate a Screen for each course */}
                <>
                    {courses.map((course) => (
                        <Stack.Screen
                            key={course.id}
                            name={course.title}
                            component={course.component}
                        />
                    ))}
                    {tutorials.map((course) => (
                        <Stack.Screen
                            key={course.id}
                            name={course.title}
                            component={course.component}
                        />
                    ))}
                    {materials.map((course) => (
                        <Stack.Screen
                            key={course.id}
                            name={course.title}
                            component={course.component}
                        />
                    ))}
                </>
                <>
                    {courses.map((course) => (
                        <Stack.Screen
                            key={course.id}
                            name={course.id}
                            component={course.component1}
                        />
                    ))}
                </>

            </Stack.Navigator>

        </NavigationContainer>
            
    );
}