import {TextInput, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";


export const TextFieldComponent=({Style,title,icon})=>{
    return(
        <View style={[{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            borderRadius: 10,
            borderColor: "#fff",
            marginVertical:10,
            borderWidth: 1,
        },Style]}>
            {icon?icon:<FontAwesome name={"phone"} size={30} color={"#fff"}/>}
            <TextInput style={{paddingLeft: 10, marginLeft: 10, borderLeftWidth: 1,color:"#fff", borderColor: "#fff"}}
                       placeholderTextColor={"#fff"} placeholder={title}></TextInput>
        </View>
    )
}