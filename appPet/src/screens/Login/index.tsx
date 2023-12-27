import { Text,TextInput, View,Image, Pressable } from 'react-native';
import { styles } from "./styles";
import {useNavigation} from '@react-navigation/native'

import Logo from "../../assets/IllustrationIMG.png";

export default function Login() {
  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate("Home");
  }
  function handleSignUp(){
    navigation.navigate("SignUp");
  }
  return (
    <View style={styles.container}>
        <Image 
            source={Logo}
            style={styles.image}
            resizeMode='stretch'//redimensiona a imagem para ocupar todo o espaço 
        />
        <View style={styles.conteudo2}>
            <Text style={styles.sub}>E-mail</Text>
            <TextInput style={styles.input} placeholder='home@email.com.br'/>
            <Text>Senha</Text>
            <TextInput style={styles.input} placeholder='********' secureTextEntry={true} />
            <Pressable onPress={handleSignUp}>
                <Text style={styles.signup}>{'Cadastre-se'}</Text>
            </Pressable>
            <Pressable onPress={handleHome} style={styles.butStyle}>
                <Text style={styles.textBut}>{'Entrar'}</Text>
            </Pressable>
        </View>

    </View>

  );
}

