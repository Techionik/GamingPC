import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function ButtonComponent({Style,title,titleStyle,onPress,}) {
    return (
        <TouchableOpacity onPress={onPress} style={[{
            borderRadius: 10,
            backgroundColor: Color.primary,
            paddingVertical: 10,
            justifyContent:"center",
            alignItems:"center",
            marginVertical: 20,
            marginHorizontal:20
        }, Style]}>
            <Text style={[{fontSize:18,fontFamily:Constants.fontFamilyBold,color:"#fff"},titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
