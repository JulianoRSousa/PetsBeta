import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import * as AppColors from "../assets/Colors";

export default function PetsTextInput(props) {
  useEffect(() => {});
  const width = Dimensions.get("window").width * 0.8;
  const height = Dimensions.get("window").height * 0.07;
  return (
    <View
      style={{
        backgroundColor: AppColors.white,
        borderRadius: 30,
        width: width,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          backgroundColor: AppColors.white,
          borderRadius: 30,
          fontFamily: "Chewy",
          color: AppColors.base,
          position: "absolute",
          left: width / 8,
          top: -(height / 6),
          paddingHorizontal: 5,
          fontSize:16
        }}
      >
        {props.tittle}
      </Text>
      <TextInput
        multiline={false}
        caretHidden={true}
        passwordRules={props.passwordRules}
        secureTextEntry={props.isPass}
        style={{
          borderRadius: 30,
          marginHorizontal: width / 10,
          color: AppColors.base,
        }}
      ></TextInput>
    </View>
  );
}

const style = StyleSheet.create({});
