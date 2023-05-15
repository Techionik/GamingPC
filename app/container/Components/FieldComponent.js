import {Image, TextInput, View} from "react-native";
import React from "react";
import {Color} from "../../common";


export default function FieldComponent({Icon,multiline,theme,nolines, Placeholder, Style, IconStyle, value, onChangeText,secureTextEntry,FieldStyle}) {

    return (
        <View style={[{
            flexDirection: "row",
            borderRadius: 20,
            alignItems:"center",
            backgroundColor: theme?.fieldBackgroundColor,
            paddingVertical: 13,
            paddingLeft: 20,
            marginTop: 10
        }, Style]}>
            {Icon?<Image source={Icon} resizeMode={"contain"}
                    style={[{
                        aspectRatio: 1,
                        height: undefined,
                        width: "8%",
                        marginRight: 10,
                        tintColor: theme?.fieldTextColor
                    }, IconStyle]}/>:null}
            <TextInput multiline={multiline?multiline:false}  numberOfLines={nolines}  secureTextEntry={secureTextEntry} style={[{flex: 1, paddingVertical: 0, color: theme?.fieldTextColor},FieldStyle]} placeholderTextColor={theme?.fieldTextColor}
                       value={value} onChangeText={onChangeText} placeholder={Placeholder}></TextInput>
        </View>
    )
}
