import React from 'react';
import { useFonts } from "expo-font";
import {
  Archivo_900Black,
  Archivo_700Bold,
  Archivo_400Regular,
} from "@expo-google-fonts/archivo";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { AuthRoutes } from './src/routes/auth.routes';


export default function App(){
  const [fontsLoaded, fontError] = useFonts({
        Archivo_900Black,
        Archivo_700Bold,
        Archivo_400Regular,
        Inter_400Regular,
        Inter_500Medium,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return(
    <AuthRoutes />
  );
}

