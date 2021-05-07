import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import * as AppColors from '../assets/Colors'


export default function PetsButton(props) {
    const [color, setColor] = useState('blue');
    const [styleSelected, setStyleSelected] = useState(styleLight);

    
    useEffect(() => {
        selectColor();
    })

    function selectColor() {
        setColor(props.color)
        if (color == 'blue') {
            setStyleSelected(styleBlue)
        } else if (color == 'light') {
            setStyleSelected(styleLight)
        } else if (color == 'orange') {
            setStyleSelected(styleOrange)
        }
    }

    return (
            <TouchableOpacity onPress={props.onPress} style={styleSelected.shadowButton}>
                <View style={styleSelected.button}>
                    <Text style={styleSelected.text}>{props.tittle}</Text>
                </View>
            </TouchableOpacity>
    )
}

const styleBlue = StyleSheet.create({
    button: {
        backgroundColor: AppColors.mediumBlue,
        height: '95%',
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowButton: {
        height: '7%',
        width: '45%',
        borderRadius: 30,
        marginBottom: 10,
        backgroundColor: AppColors.darkBlue,
    },
    text: {
        fontFamily: 'Chewy',
        fontSize: 18,
        color: AppColors.white
    }
})

const styleLight = StyleSheet.create({
    button: {
        backgroundColor: AppColors.light,
        height: '95%',
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowButton: {
        height: '7%',
        width: '45%',
        borderRadius: 30,
        marginBottom: 10,
        backgroundColor: AppColors.darkLight,
    },
    text: {
        fontFamily: 'Chewy',
        fontSize: 18,
        color: AppColors.base
    }
})

const styleOrange = StyleSheet.create({
    button: {
        backgroundColor: AppColors.base,
        height: '95%',
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowButton: {
        height: '7%',
        width: '45%',
        borderRadius: 30,
        marginBottom: 10,
        backgroundColor: AppColors.darkBase,
    },
    text: {
        fontFamily: 'Chewy',
        fontSize: 18,
        color: AppColors.light
    }
})
