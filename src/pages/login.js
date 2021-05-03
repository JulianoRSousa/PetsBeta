import * as React from "react";
import {
  View,
  StatusBar,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as appColors from "../components/colors";

export default function login({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: appColors.white }}>
      <StatusBar backgroundColor={appColors.base} />
      <View
        style={{
          backgroundColor: appColors.base,
          height: "30%",
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          justifyContent: "flex-end",
        }}
      >
        <View style={{ flex: 1}}>
          <View style={{backgroundColor:'#ff4612', elevation: 1, height:100, width:100, marginVertical:45, marginLeft:25, borderRadius:30}}>
            <View style={{backgroundColor:appColors.white, margin: -5, height:100, width:100, borderRadius:30}}></View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: appColors.white,
              height: 50,
              width: "80%",
              borderRadius: 30,
              alignSelf: "center",
              marginBottom: -15,
              elevation: 10,
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
              <Text>texto</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
