import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as AppColors from "../assets/Colors";

const width = Dimensions.get("window").width * 0.45;
const height = Dimensions.get("window").height * 0.07;

export default function PetsButton(props) {
  const [color, setColor] = useState("light");
  const [styleSelected, setStyleSelected] = useState(styleLight);
 

  useEffect(() => {
    selectColor();
  });

  function selectColor() {
    setColor(props.color);
    if (color == "blue") {
      setStyleSelected(styleBlue);
    } else if (color == "light") {
      setStyleSelected(styleLight);
    } else if (color == "orange") {
      setStyleSelected(styleOrange);
    }
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styleSelected.shadowButton}
    >
      <View style={styleSelected.button}>
        <Text style={styleSelected.text}>{props.tittle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styleBlue = StyleSheet.create({
  button: {
    backgroundColor: AppColors.mediumBlue,
    height: "95%",
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowButton: {
    height: height,
    width: width,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: AppColors.darkBlue,
    elevation: 3,
  },
  text: {
    fontFamily: "Chewy",
    fontSize: 18,
    color: AppColors.white,
  },
});

const styleLight = StyleSheet.create({
  button: {
    backgroundColor: AppColors.light,
    height: "95%",
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowButton: {
    height: height,
    width: width,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: AppColors.darkLight,
    elevation: 3,
  },
  text: {
    fontFamily: "Chewy",
    fontSize: 18,
    color: AppColors.base,
  },
});

const styleOrange = StyleSheet.create({
  button: {
    backgroundColor: AppColors.base,
    height: "95%",
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowButton: {
    height: height,
    width: width,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: AppColors.darkBase,
    elevation: 3,
  },
  text: {
    fontFamily: "Chewy",
    fontSize: 18,
    color: AppColors.light,
  },
});
