import React from "react";
import {
  View,
  StatusBar,
} from "react-native";
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';

export default function login({ navigation }) {
  return (
    <View style={{flex:1, alignItems:'flex-start', backgroundColor:AppColors.white}}>
      <StatusBar backgroundColor={AppColors.base} />
      <PetsButton tittle={'Entrar'} color={'blue'} onPress={()=>navigation.navigate('SplashScreen')}/>
      <PetsButton tittle={'Criar Conta'} color={'light'} onPress={()=>console.log('teste')}/>
      <PetsButton tittle={'Criar Conta'} color={'orange'} onPress={()=>console.log('teste')}/>
    </View>
  );
}
