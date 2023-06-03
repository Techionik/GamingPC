import {TextInput, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import {Color} from "../../common";


export const CartFieldComponent=({Style,title,secureTextEntry,icon,value,onChangeText,FieldStyle})=>{
    return(
        <View style={[{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor:Color.primary,
            marginVertical:10,
            borderWidth: 1,
        },Style]}>
            <TextInput secureTextEntry={secureTextEntry}  value={value} onChangeText={onChangeText} style={[{flex:1,color:Color.primary},FieldStyle]}
                       placeholderTextColor={Color.primary} placeholder={title}></TextInput>
        </View>
    )
}