import {Image, TextInput, View} from "react-native";
import React from "react";
import {Color} from "../../common";


export default function FieldComponent({Icon,theme, Placeholder, Style, IconStyle, value, onChangeText,secureTextEntry,FieldStyle}) {

    return (
        <View style={[{
            flexDirection: "row",
            borderRadius: 10,
            alignItems:"center",
            backgroundColor: theme?.fieldBackgroundColor,
            paddingVertical: 10,
            paddingLeft: 20,
            marginTop: 10
        }, Style]}>
            <Image source={Icon} resizeMode={"contain"}
                   style={[{aspectRatio: 1, height: undefined, width: "8%", marginRight: 10,tintColor:theme?.fieldTextColor}, IconStyle]}/>
            <TextInput secureTextEntry={secureTextEntry} style={[{flex: 1, paddingVertical: 0, color: theme?.fieldTextColor},FieldStyle]} placeholderTextColor={theme?.fieldTextColor}
                       value={value} onChangeText={onChangeText} placeholder={Placeholder}></TextInput>
        </View>
    )
}
