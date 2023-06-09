import {Text, TouchableOpacity} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";

export const ButtonComponent=({onPress,Style,title,TitleStyle})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[{padding:5,justifyContent:"center",alignItems:"center",borderRadius:30,backgroundColor:Color.theme},Style]}>
            <Text style={[{fontSize:20,color:Color.primary,fontFamily:Constants.fontFamilyBold},TitleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}