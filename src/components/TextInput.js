import React, { useState, useEffect, useRef } from "react";
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
  const ref_focusNow = useRef();
  const noFocusYet = useRef();
  const ref_me = useRef();

  useEffect(() => {});
  const width = Dimensions.get("window").width * 0.8;
  const height = Dimensions.get("window").height * 0.07;
  const [nextFocusOld, setNextFocusOld] = useState('');
  const [nextFocus, setNextFocus] = useState('');
  const [name, setName] = useState('');
  
  useEffect(()=>{
    if(props.name){
      setName(props.name)
    }
    if(props.nextFocus){
      setNextFocus(props.nextFocus)
    }
  },[])

  function goFocus() {
    console.log("nextFocus:",nextFocus)
    console.log('name:',name)
    console.log('nextFocusOld:',nextFocusOld)
    setNextFocusOld(nextFocus);
    console.log(ref_me.current.getKey())
    ref_me.current.focus();
console.log('focus??')
    if (nextFocusOld == name) {
      console.log('to no if')
      setNextFocus(props.nextFocus());
    }
  }


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
          fontSize: 16,
        }}
      >
        {props.tittle}
      </Text>
      <TextInput
      key={'pass'}
        ref={ref_me}
        multiline={false}
        caretHidden={true}
        passwordRules={props.passwordRules}
        secureTextEntry={props.isPass}
        onSubmitEditing={()=>goFocus(props.nextFocus)}
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
