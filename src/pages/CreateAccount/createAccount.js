import * as React from "react";
import {
  View,
  StatusBar,
} from "react-native";
import * as AppColors from '../../assets/Colors'

export default function login({ navigation }) {
  return (
    <View>
      <StatusBar backgroundColor={AppColors.base} />
    </View>
  );
}
