import React from 'react';
import {View} from 'react-native';
import * as AppColors from './src/assets/Colors';
import Routes from './src/routes';


export default function App(){
  return (
  <View style={{flex:1, backgroundColor:AppColors.base}}>
    <Routes/>
    </View>
    )
}