
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function authScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=> {navigation.navigate('Login'), console.log("pressed")}} style={{backgroundColor:"#ff8637", height:40, width:90}}>
      <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}
