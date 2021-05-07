import * as React from "react";
import {
  View,
  StatusBar,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ProfileInfo from '../../components/ProfileInfo';
import * as AppColors from "../../assets/Colors";

export default function login({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: AppColors.white }}>
      <StatusBar backgroundColor={AppColors.base} />
      
    </View>
  );
}
