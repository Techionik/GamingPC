import {Image, TextInput, View} from "react-native";
import React from "react";
import {Color} from "../../common";


export default function FieldComponent({Icon, Placeholder, Style, IconStyle, value, onChangeText,secureTextEntry}) {
    return (
        <View style={[{
            flexDirection: "row",
            borderRadius: 10,
            alignItems:"center",
            backgroundColor: "#F5F5F5",
            paddingVertical: 10,
            paddingLeft: 20,
            marginTop: 10
        }, Style]}>
            <Image source={Icon} resizeMode={"contain"}
                   style={[{aspectRatio: 1, height: undefined, width: "10%", marginRight: 10}, IconStyle]}/>
            <TextInput secureTextEntry={secureTextEntry} style={{flex: 1, paddingVertical: 0, color: "#000"}} placeholderTextColor={Color.gray}
                       value={value} onChangeText={onChangeText} placeholder={Placeholder}></TextInput>
        </View>
    )
}
