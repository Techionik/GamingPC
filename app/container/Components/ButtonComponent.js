import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function ButtonComponent({disable,Style,title,titleStyle,onPress,}) {
    return (
        <TouchableOpacity disabled={disable} onPress={onPress} style={[{
            borderRadius: 10,
            backgroundColor: Color.primary,
            paddingVertical: 10,
            justifyContent:"center",
            alignItems:"center",
            marginVertical: 10,
            marginHorizontal:20
        }, Style]}>
            <Text style={[{fontSize:18,fontFamily:Constants.fontFamilyBold,color:"#fff",includeFontPadding:false,padding:0},titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
