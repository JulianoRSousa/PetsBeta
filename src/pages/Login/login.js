import React from "react";
import { View, StatusBar, Text } from "react-native";
import * as AppColors from "../../assets/Colors";
import PetsButton from "../../components/Buttons";
import PetsTextInput from "../../components/TextInput";
import LottieView from "lottie-react-native";

export default function login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: AppColors.base,
      }}
    >
      <StatusBar backgroundColor={AppColors.base} />

      <Text
        style={{
          color: "white",
          fontFamily: "Chewy",
          fontSize: 70,
          height: "35%",
          width: "100%",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        Pets
      </Text>
      <PetsTextInput name={'user'} nextFocus={'pass'} tittle={"Nome de usuário"}/>
      <PetsTextInput name={'pass'} nextFocus={'user'} tittle={"Senha"} isPass={true} />
      <PetsButton
        tittle={"Entrar"}
        color={"blue"}
        onPress={() => navigation.navigate("SplashScreen")}
      />
      <PetsButton
        tittle={"Criar Conta"}
        color={"light"}
        onPress={() => console.log("teste")}
      />
      <View
        style={{
          height: "5%",
          width: "35%",
          alignItems: "center",
          justifyContent:'center',
          alignSelf:'baseline'
        }}
      >
        <LottieView
          source={require("../../assets/animations/loginHappyDog.json")}
          autoSize={true}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}
