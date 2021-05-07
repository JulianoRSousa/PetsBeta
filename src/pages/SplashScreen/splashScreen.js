import React, { useEffect } from "react";
import {
  View,
  StatusBar,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ProfileInfo from '../../components/ProfileInfo';
import * as AppColors from '../../assets/Colors';
import PetsButton from "../../components/Buttons";

export default function splashScreen({ navigation }) {

  useEffect(() => {
    navigation.navigate('Login')
  });

  return (
    <View style={{ flex: 1, backgroundColor: AppColors.base }}>
      <StatusBar backgroundColor={AppColors.base} />
      <PetsButton tittle={'Login'} color='light' onPress={()=> navigation.navigate('Login')}/>
    </View>
  );
}
