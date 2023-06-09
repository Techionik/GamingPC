import {Text, TextInput, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import {Color, Constants} from "../../common";


export const FieldComponent = ({Style, title, secureTextEntry, placeholder, value, onChangeText, FieldStyle}) => {
    return (
        <View style={[{
            marginVertical: 5,
        }, Style]}>
            <Text style={{fontSize: 15,marginLeft:10, color: "#fff", fontFamily: Constants.fontFamilyBold}}>{title}</Text>
            <TextInput secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText} style={[{
                paddingLeft: 20,
                backgroundColor: "rgba(248,248,248,0.2)",
                borderRadius: 30,
                color: "#fff"
            }, FieldStyle]}
                       placeholderTextColor={"#fff"} placeholder={placeholder}></TextInput>
        </View>
    )
}