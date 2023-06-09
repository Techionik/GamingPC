import {TextInput} from "react-native";
import React from "react";


export const CardField=({style,placeholder,value,onChangeText})=>{
    return(
        <TextInput placeholderTextColor={"#fff"} value={value} onChangeText={onChangeText} placeholder={placeholder} style={{padding:10,marginVertical:5,paddingLeft:20,backgroundColor:"rgba(248,248,248,0.2)",color:"#fff",borderRadius:10}}></TextInput>

    )
}