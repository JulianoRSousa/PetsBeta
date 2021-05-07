import React from "react";
import { View, StatusBar, Text } from "react-native";
import * as AppColors from "../../assets/Colors";
import PetsButton from "../../components/Buttons";
import PetsTextInput from "../../components/TextInput";

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
          alignContent:'center',
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
          textAlignVertical:'center'
        }}
      >
        Pets
      </Text>
      <PetsTextInput tittle={"Usuário"} />
      <PetsTextInput tittle={"Senha"} isPass={true}/>
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
    </View>
  );
}
